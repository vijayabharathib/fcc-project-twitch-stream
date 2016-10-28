
var apiStreamURL="https://wind-bow.hyperdev.space/twitch-api/streams/"; //base url
var apiChannelURL="https://wind-bow.hyperdev.space/twitch-api/channels/"; //base url
var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
var results=[];
/**
  * wait until the document is ready to take orders
  * define behaviour buttons and text fields
  * define ajax api call
  */
$(document).ready(function(){

  /**
    * render channel status, current stream
    * logo and link
    */
  function renderChannels(){
    channels.forEach(function(channel,index){
      searchTwitch(channel);
    });

  }
  /**
    * search generator for wiki api
    * info prop used to get url
    * extract used to get snippet - 140 chars
    * apiURLPrefix - global base api url
    * searchQuery - global search text variable
    * render results on success
    */
  function searchTwitch(channel){
    var result="";
    $.ajax({
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        dataType: "jsonp",
        url: apiChannelURL + channel,
        success: function(data){
          if(data.status!="404"){
            result+="<p><a href='" + data.url + "'>";
            result+="<img src='" + data.logo + "'></img>";
            result+= "<span class='display_name'>" + data.display_name + "</span>";
            result+= "<span class='name'>(" + data.name + ")</span>";
            getStream();
          }
        },
        error: function(e){
          $('.error').append(e.message);
        }
    });
    function getStream(){
      $.ajax({
          headers: {
            "Access-Control-Allow-Origin": "*"
          },
          dataType: "jsonp",
          url: apiStreamURL + channel,
          success: function(data){
            result+="<span class='stream";
            if(data.stream == null){
              result+=" fa fw fa-clock-o'>"
              result+= "Offline"; //add an offline class
            } else {
              result+= " fa fw fa-check-circle-o'>"
              result+= data.stream.game; //no class
            }
            result+= "</span></a></p>";
            $('.result').append(result); //render result
        }
      });
    }
  }
  renderChannels();
});
