export const HOST = "https://kruo3njzbf.execute-api.eu-west-1.amazonaws.com";
export const HOST_CLOUDFORMATION = "https://jys4alcqt7.execute-api.eu-west-1.amazonaws.com"
export const PORT = 443;
export const PREFIX = currentAmbieEnviroment === 'production' ? '/v1' : '/staging';
export const LOCAL_STORAGE_USER = "AMBIE_USER";
export const LOCAL_STORAGE_SKIPS = "AMBIE_SKIPS";
export const GENERAL_SUCCESS_MESSAGE = "Your changes have been succesfully saved";
export const GENERAL_ERROR_MESSAGE = "There was an error while trying to save your changes";
export const GENERAL_REQUEST_ERROR_MESSAGE = "There was an error while fething the data";
export const DEFAULT_NOTIFICATION_HIDE_TIMEOUT = 5 * 1000;
export const ALBUM_ART = currentAmbieEnviroment === 'production' ? 'http://play.ambie.fm/media/' : 'http://stage.ambie.fm/media/';

export const CLONE_OPTIONS = {
  SCHEDULE: 'schedule',
  AREA: 'area'
};