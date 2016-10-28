
var apiStreamURL="https://wind-bow.hyperdev.space/twitch-api/streams/"; //base url
var apiChannelURL="https://wind-bow.hyperdev.space/twitch-api/channels/"; //base url
var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
var results=[];
/**
  * wait until the document is ready to take orders
  * define ajax api call
  */
$(document).ready(function(){

  /**
    * render channel status, current stream
    * logo and link
    */
  function renderChannels(){
    channels.forEach(function(channel,index){
      $('.error').append('<ul>')
      searchTwitch(channel);
      $('.error').append('</ul>')

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
            result+="<section><a href='" + data.url + "'>";
            result+="<img src='" + data.logo + "'></img>";
            result+= "<span class='display_name'>" + data.display_name + "</span>";
            result+= "<span class='name'>(" + data.name + ")</span>";
            getStream();
          }else{
            $('.error').append("<li>" + data.message + "</li>");
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
  renderChannels();
});
