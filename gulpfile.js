const gulp = require('gulp')
const jest = require('jest-cli');
const yaml = require('js-yaml');
const fs = require('fs');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const runSequence = require('run-sequence'); 

var configTest = require('./config/test.config.js')
var configDevelop = require('./config/develop.config.js')
var configStaging = require('./config/staging.config.js')
var configProduction = require('./config/production.config.js')


/**
*  Constantes de direcion globales
**/
const sourceJsonApp = './src/configs/configs.json'


/**
* Configuracion testing App 
* Se colocara en lugar de jest en test de package.json
**/
gulp.task('testing-jest', function(done) {
		
    if(process.env.NODE_ENV==='testing-watch'){
       configTest.test_config.watch = true;       
    }        

    jest      
      .runCLI(configTest.test_config, '.')
      .then((success) => {        
        console.log("Number Failed Testing => "+success.results.numFailedTests);
     })
      .catch((failure) => {
        console.error(failure);
     });
});


/**
* Configuracion de Varibles de Entorno con yml
* Se configurara dependiendo el entorno 
**/
gulp.task('config-env', function() {    
  if(process.env.NODE_ENV){
    try {
        var env = identityEnv(process.env.NODE_ENV)
        if(env!==''){
          var dataConfig = yaml.safeLoad(fs.readFileSync(env, 'utf8'));      
          var indentedJson = JSON.stringify(dataConfig, null, 4);
          
          if(fs.existsSync(sourceJsonApp)){        
            fs.writeFile(sourceJsonApp, indentedJson, (err) => {
              if (err) throw err;
              console.log('=========  Configuration Saves ============');
              console.log('=========  Mode '+ process.env.NODE_ENV + ' Active ============');
            }); 
          }else{
            console.log('===========================================================================');
            console.log('=========  ERROR EL ARCHIVO DE CONFIGURACION NO EXISTE EN SRC ============');
            console.log('===========================================================================');
          }
        }else{
          console.log('==================================================');
          console.log('========= ESPECIFIQUE UN ENTORNO VALIDO ==========');
          console.log('==================================================');
        }
      } catch (e) {
          console.log(e);
      }    
    }else{
      console.log('===========================================================================');
      console.log('========= ERROR NO SE HA ESPECIFICADO EL NODE_ENV PARA EJECUCION ==========');
      console.log('===========================================================================');
    }
})

function identityEnv(env){  
  switch(env){
    case configDevelop.constants.env:
      return configDevelop.constants.source
      break;
    case configStaging.constants.env:
      return configStaging.constants.source
      break;
    case configProduction.constants.env:
      return configProduction.constants.source
      break;
    default:
      return ''
      break;
  }
}

/**
* Configuracion antes de realizar despliegue en produccion
* Se configura optimizador de imagenes, con el fin de restar peso
**/

gulp.task('build-before', function(cb){
  runSequence('config-env','images-optimize', cb)
})


gulp.task('images-optimize', function () {
    return gulp.src(configProduction.constants.sourceImages+'**/'+'**/'+'*')
        .pipe(cache(imagemin(
              {
                optimizationLevel: 5,
                progressive: true, 
                interlaced: true
              }
        )))
        .pipe(gulp.dest(configProduction.constants.sourceImages))
});


gulp.task('default',['',''])