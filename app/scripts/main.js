
var apiStreamURL="https://wind-bow.hyperdev.space/twitch-api/streams/"; //base url
var apiChannelURL="https://wind-bow.hyperdev.space/twitch-api/channels/"; //base url
var channels=[
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "comster404"];
var results=[];
/**
  * wait until the document is ready to take orders
  */
$(document).ready(function(){

  /**
    * for each channel in the global variable channels
    * render channel status, current stream
    * logo and link
    */
  function renderChannels(){
    $('.error').append('<ul>')
    channels.forEach(function(channel,index){
      searchTwitch(channel);
    });
    $('.error').append('</ul>')
  }
  /**
    * search twitch api for channel details first
    * call for stream details next
    * render results on success
    * log error if channel cannot be found
    */
  function searchTwitch(channel){
    var result="";
    /**
      * get channel details
      * if the result is success, call stream details
      * render them in order
      */
    $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*" //handle cross origin issues
        },
        dataType: "jsonp", //again to handle cross origin
        url: apiChannelURL + channel,
        success: function(data){
          if(data.status!="404"){
            result+="<section><a href='" + data.url + "'>";
            result+="<img src='" + data.logo + "'></img>";
            result+= "<span class='display_name'>" + data.display_name + "</span>";
            result+= "<span class='name'>(" + data.name + ")</span>";
            getStream();
          }else{ //if status is 404 log error
            $('.error').append("<li>" + data.message + "</li>");
          }
        },
        error: function(e){
          $('.error').append(e.message);
        }
    });
    /**
      * get stream details if channel is available
      */
    function getStream(){
      $.ajax({
          headers: {
            "Access-Control-Allow-Origin": "*" //handle cross origin issues
          },
          dataType: "jsonp", //to handle cross origin issues
          url: apiStreamURL + channel,
          success: function(data){
            result+= "<div class='status";
            if(data.stream == null){
              result+=" offline'>";
              result+="<i class='presence fa fw fa-clock-o'></i>"
              result+= "<span class='stream'>Offline</span>";
            } else {
              result+=" online'>";
              result+= "<i class='presence fa fw fa-check-circle-o'></i>"
              result+= "<span class='stream'>" + data.stream.game+"</span>";//no class
            }
            result+= "</div></a></section>";
            $('.result').append(result); //render result
        }
      });
    }
  }

  // main call that does the job
  renderChannels();
});
