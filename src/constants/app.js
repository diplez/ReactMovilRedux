import * as app from './../configs/configs.json';

/**
* API REST
*/
const BASE_URL = app.config.API_URL;


const URL_LOGIN = BASE_URL+'/service/2/authentication/login'
const URL_ACTIVITIES = 'https://jsonplaceholder.typicode.com/users'

/**
* Rutas de Navegacion
**/
const ABOUT = 'about';
const CODECOEXIST = 'codeCoexist';
const HOME = 'home';
const CIRCULAR = 'circular';
const LOGIN = 'login';
const PROFILE = 'profile';
const AGENDA = 'agenda';
const HORARIO = 'schedule';
const ITINERARY = 'itinerary';
const AGENDA_INSTITUTIONAL = 'agendaInstitutional';
const ANNOUNCEMENTS = 'announcements';
const REPORT = 'report';

/** Navigacion drawer (Menu lateral) __OD=> Opcion de menu Drawer**/
const ABOUTOD = 'aboutOD';
const CODECOEXISTOD = 'codeCoexistOD';
const LINETIMEOD = 'lineTimeOD';
const CIRCULAROD = 'circularOD';
const PROFILEOD = 'profileOD';
const AGENDAOD = 'agendaOD';
const HORARIOOD = 'scheduleOD';
const ITINERARYOD = 'itineraryOD';
const AGENDA_INSTITUTIONALOD = 'agendaInstitutionalOD';
const ANNOUNCEMENTSOD = 'announcementsOD';
const REPORTOD = 'reportOD';

/**
* Actions redux
**/
const FETCHING_SESION = 'FETCHING_SESION';
const SUCCESS_SESION = 'SUCCESS_SESION';
const ERROR_SESION = 'ERROR_SESION';
const STOP_ACTIVITY = 'STOP_ACTIVITY'

const FETCHING = 'FETCHING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';
const CLOSE_SESSION = 'CLOSE_SESSION'
const ROL_USER = 'ROL_USER'

/**
* URLS DE APP
**/
const URL_LOJASOFT = 'https://genusacademico.com/';

export {
		ABOUT,
		ABOUTOD,
		AGENDA,
		AGENDAOD,
		AGENDA_INSTITUTIONAL,
		AGENDA_INSTITUTIONALOD,
		ANNOUNCEMENTS,
		ANNOUNCEMENTSOD,
		CIRCULAR,
		CIRCULAROD,
		CODECOEXIST,
		CODECOEXISTOD,
		CLOSE_SESSION,
		ERROR_SESION,
		ERROR,
		FETCHING_SESION,
		FETCHING,
		HOME,
		HORARIO,
		HORARIOOD,
		ITINERARY,
		ITINERARYOD,
		LOGIN,		
		LINETIMEOD,
		PROFILE,
		PROFILEOD,
		SUCCESS_SESION,
		SUCCESS,
		URL_LOGIN,
		URL_ACTIVITIES,
		URL_LOJASOFT,
		ROL_USER,
		REPORT,
		REPORTOD,
		STOP_ACTIVITY
};
