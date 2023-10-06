import axios from 'axios';

export default class Api {
    constructor() {
      this.api_token = null;
      this.client = null;
      this.api_url = '/api/';
      this.endpoints = require('./Data.json'); // Importing URLs from Data.json
    }
  
    init = (aT = null) => {
      this.api_token = aT;

      let headers = {
        Accept: "application/json",
      };
  
      if (this.api_token) {
        headers.authorization = `${this.api_token}`;
        headers.Host = 'HOST';
        headers.accept = 'HEADERS';
        headers.brand = 'BRAND';
      }

      this.client = axios.create({
        baseURL: this.api_url,
        timeout: 31000,
        headers: headers,
      });
  
      return this.client;
    };

    // ME //
    get_Membership_Info = (aT) => {
        return this.init(aT).get(this.endpoints.MembershipInfo);
    };

    // CONTENT //
    get_radio = (params) => {
      return this.init().get(this.endpoints.Radio);
    };

    get_homepage = (params) => {
      return this.init().get(this.endpoints.Homepage);
    };

    get_Acts = (params) => {
        return this.init().get(this.endpoints.Acts);
    };

    get_Videos = (params) => {
        return this.init().get(this.endpoints.Videos);
    };

    get_Sections = (params) => {
        return this.init().get(this.endpoints.Sections);
    };

    get_Library = (params) => {
        return this.init().get(this.endpoints.Library);
    };

    get_Library_Events = (params) => {
        return this.init().get(this.endpoints.LibraryEvents);
    };

    get_Library_Shows = (params) => {
        return this.init().get(this.endpoints.LibraryShows);
    };

    get_Library_Sets = (params) => {
        return this.init().get(this.endpoints.LibrarySets);
    };

    get_Library_Archive = (params) => {
        return this.init().get(this.endpoints.LibraryArchive);
    };

    get_Video_Collection = (collectionID) => {
        return this.init().get(this.endpoints.VideoCollection + collectionID);
    };

    get_Video_Info = (videoID, args = null) => {
        if(args === null) {
            return this.init().get(this.endpoints.VideoInfo + videoID);
        } else {
            return this.init().get(this.endpoints.VideoInfo + args);
        }        
    };

    get_Related_Videos = (videoID) => {
        return this.init().get(this.endpoints.RelatedVideos.replace('{videoID}', videoID));
    };

    get_Stream_URL = (videoID, aT) => {
        return this.init(aT).get(this.endpoints.StreamURL.replace('{videoID}', videoID));
    };

    get_AudioStream_URL = (videoID, aT) => {
        return this.init(aT).get(this.endpoints.AudioStreamURL.replace('{videoID}', videoID));
    };

    get_Act_Info = (ActID) => {
        return this.init().get(this.endpoints.ActInfo + ActID);
    };

    get_Event_Data = (EventID, args = null) => {
        if(args === null) {
            return this.init().get(this.endpoints.EventData + EventID);
        } else {
            return this.init().get(this.endpoints.EventData + args);
        }    
    };

    get_Past_Event_Edition = (EventID) => {
        return this.init().get(this.endpoints.PastEventEdition.replace('{EventID}', EventID));
    };

    get_Event_Edition = (EventID, args = null) => {
        if(args === null) {
            return this.init().get(this.endpoints.EventEdition + EventID);
        } else {
            return this.init().get(this.endpoints.EventEdition + args);
        }
    };

    get_Event_Timetable = (EventID) => {
        return this.init().get(this.endpoints.EventTimetable + EventID);
    };

    get_Search = (SearchQuery, args = null) => {
        if(args === null) {
            return this.init().get(this.endpoints.Search + SearchQuery);
        } else {
            return this.init().get(this.endpoints.Search + SearchQuery + args);
        }
    };
}
