var apiStreamURL="https://wind-bow.hyperdev.space/twitch-api/streams/",apiChannelURL="https://wind-bow.hyperdev.space/twitch-api/channels/",channels=["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","comster404"],results=[];$(document).ready(function(){function a(){channels.forEach(function(a,s){$(".error").append("<ul>"),e(a),$(".error").append("</ul>")})}function e(a){function e(){$.ajax({headers:{"Access-Control-Allow-Origin":"*"},dataType:"jsonp",url:apiStreamURL+a,success:function(a){s+="<div class='status",null==a.stream?(s+=" offline'>",s+="<i class='presence fa fw fa-clock-o'></i>",s+="<span class='stream'>Offline</span>"):(s+=" online'>",s+="<i class='presence fa fw fa-check-circle-o'></i>",s+="<span class='stream'>"+a.stream.game+"</span>"),s+="</div></a></section>",$(".result").append(s)}})}var s="";$.ajax({headers:{"Access-Control-Allow-Origin":"*"},dataType:"jsonp",url:apiChannelURL+a,success:function(a){"404"!=a.status?(s+="<section><a href='"+a.url+"'>",s+="<img src='"+a.logo+"'></img>",s+="<span class='display_name'>"+a.display_name+"</span>",s+="<span class='name'>("+a.name+")</span>",e()):$(".error").append("<li>"+a.message+"</li>")},error:function(a){$(".error").append(a.message)}})}a()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpU3RyZWFtVVJMIiwiYXBpQ2hhbm5lbFVSTCIsImNoYW5uZWxzIiwicmVzdWx0cyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicmVuZGVyQ2hhbm5lbHMiLCJmb3JFYWNoIiwiY2hhbm5lbCIsImluZGV4IiwiYXBwZW5kIiwic2VhcmNoVHdpdGNoIiwiZ2V0U3RyZWFtIiwiYWpheCIsImhlYWRlcnMiLCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4iLCJkYXRhVHlwZSIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwicmVzdWx0Iiwic3RyZWFtIiwiZ2FtZSIsInN0YXR1cyIsImxvZ28iLCJkaXNwbGF5X25hbWUiLCJuYW1lIiwibWVzc2FnZSIsImVycm9yIiwiZSJdLCJtYXBwaW5ncyI6IkFBQ0EsR0FBSUEsY0FBYSxzREFDYkMsY0FBYyx1REFDZEMsVUFBVSxVQUFXLGFBQWMsWUFBYSxlQUFnQixXQUFZLFdBQVksYUFBYyxlQUFlLGNBQ3JIQyxVQUtKQyxHQUFFQyxVQUFVQyxNQUFNLFdBTWhCLFFBQVNDLEtBQ1BMLFNBQVNNLFFBQVEsU0FBU0MsRUFBUUMsR0FDaENOLEVBQUUsVUFBVU8sT0FBTyxRQUNuQkMsRUFBYUgsR0FDYkwsRUFBRSxVQUFVTyxPQUFPLFdBYXZCLFFBQVNDLEdBQWFILEdBdUJwQixRQUFTSSxLQUNQVCxFQUFFVSxNQUNFQyxTQUNFQyw4QkFBK0IsS0FFakNDLFNBQVUsUUFDVkMsSUFBS2xCLGFBQWVTLEVBQ3BCVSxRQUFTLFNBQVNDLEdBQ2hCQyxHQUFTLHFCQUNTLE1BQWZELEVBQUtFLFFBQ05ELEdBQVEsYUFDUkEsR0FBUSw0Q0FDUkEsR0FBUyx3Q0FFVEEsR0FBUSxZQUNSQSxHQUFTLG1EQUNUQSxHQUFTLHdCQUEwQkQsRUFBS0UsT0FBT0MsS0FBSyxXQUV0REYsR0FBUyx1QkFDVGpCLEVBQUUsV0FBV08sT0FBT1UsTUF6QzVCLEdBQUlBLEdBQU8sRUFDWGpCLEdBQUVVLE1BQ0VDLFNBQ0VDLDhCQUErQixLQUVqQ0MsU0FBVSxRQUNWQyxJQUFLakIsY0FBZ0JRLEVBQ3JCVSxRQUFTLFNBQVNDLEdBQ0EsT0FBYkEsRUFBS0ksUUFDTkgsR0FBUSxxQkFBdUJELEVBQUtGLElBQU0sS0FDMUNHLEdBQVEsYUFBZUQsRUFBS0ssS0FBTyxXQUNuQ0osR0FBUyw4QkFBZ0NELEVBQUtNLGFBQWUsVUFDN0RMLEdBQVMsdUJBQXlCRCxFQUFLTyxLQUFPLFdBQzlDZCxLQUVBVCxFQUFFLFVBQVVPLE9BQU8sT0FBU1MsRUFBS1EsUUFBVSxVQUcvQ0MsTUFBTyxTQUFTQyxHQUNkMUIsRUFBRSxVQUFVTyxPQUFPbUIsRUFBRUYsWUEyQjdCckIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGFwaVN0cmVhbVVSTD1cImh0dHBzOi8vd2luZC1ib3cuaHlwZXJkZXYuc3BhY2UvdHdpdGNoLWFwaS9zdHJlYW1zL1wiOyAvL2Jhc2UgdXJsXG52YXIgYXBpQ2hhbm5lbFVSTD1cImh0dHBzOi8vd2luZC1ib3cuaHlwZXJkZXYuc3BhY2UvdHdpdGNoLWFwaS9jaGFubmVscy9cIjsgLy9iYXNlIHVybFxudmFyIGNoYW5uZWxzPVtcIkVTTF9TQzJcIiwgXCJPZ2FtaW5nU0MyXCIsIFwiY3JldGV0aW9uXCIsIFwiZnJlZWNvZGVjYW1wXCIsIFwic3RvcmJlY2tcIiwgXCJoYWJhdGhjeFwiLCBcIlJvYm90Q2FsZWJcIiwgXCJub29iczJuaW5qYXNcIixcImNvbXN0ZXI0MDRcIl07XG52YXIgcmVzdWx0cz1bXTtcbi8qKlxuICAqIHdhaXQgdW50aWwgdGhlIGRvY3VtZW50IGlzIHJlYWR5IHRvIHRha2Ugb3JkZXJzXG4gICogZGVmaW5lIGFqYXggYXBpIGNhbGxcbiAgKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgLyoqXG4gICAgKiByZW5kZXIgY2hhbm5lbCBzdGF0dXMsIGN1cnJlbnQgc3RyZWFtXG4gICAgKiBsb2dvIGFuZCBsaW5rXG4gICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyQ2hhbm5lbHMoKXtcbiAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5uZWwsaW5kZXgpe1xuICAgICAgJCgnLmVycm9yJykuYXBwZW5kKCc8dWw+JylcbiAgICAgIHNlYXJjaFR3aXRjaChjaGFubmVsKTtcbiAgICAgICQoJy5lcnJvcicpLmFwcGVuZCgnPC91bD4nKVxuXG4gICAgfSk7XG5cbiAgfVxuICAvKipcbiAgICAqIHNlYXJjaCBnZW5lcmF0b3IgZm9yIHdpa2kgYXBpXG4gICAgKiBpbmZvIHByb3AgdXNlZCB0byBnZXQgdXJsXG4gICAgKiBleHRyYWN0IHVzZWQgdG8gZ2V0IHNuaXBwZXQgLSAxNDAgY2hhcnNcbiAgICAqIGFwaVVSTFByZWZpeCAtIGdsb2JhbCBiYXNlIGFwaSB1cmxcbiAgICAqIHNlYXJjaFF1ZXJ5IC0gZ2xvYmFsIHNlYXJjaCB0ZXh0IHZhcmlhYmxlXG4gICAgKiByZW5kZXIgcmVzdWx0cyBvbiBzdWNjZXNzXG4gICAgKi9cbiAgZnVuY3Rpb24gc2VhcmNoVHdpdGNoKGNoYW5uZWwpe1xuICAgIHZhciByZXN1bHQ9XCJcIjtcbiAgICAkLmFqYXgoe1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVR5cGU6IFwianNvbnBcIixcbiAgICAgICAgdXJsOiBhcGlDaGFubmVsVVJMICsgY2hhbm5lbCxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgaWYoZGF0YS5zdGF0dXMhPVwiNDA0XCIpe1xuICAgICAgICAgICAgcmVzdWx0Kz1cIjxzZWN0aW9uPjxhIGhyZWY9J1wiICsgZGF0YS51cmwgKyBcIic+XCI7XG4gICAgICAgICAgICByZXN1bHQrPVwiPGltZyBzcmM9J1wiICsgZGF0YS5sb2dvICsgXCInPjwvaW1nPlwiO1xuICAgICAgICAgICAgcmVzdWx0Kz0gXCI8c3BhbiBjbGFzcz0nZGlzcGxheV9uYW1lJz5cIiArIGRhdGEuZGlzcGxheV9uYW1lICsgXCI8L3NwYW4+XCI7XG4gICAgICAgICAgICByZXN1bHQrPSBcIjxzcGFuIGNsYXNzPSduYW1lJz4oXCIgKyBkYXRhLm5hbWUgKyBcIik8L3NwYW4+XCI7XG4gICAgICAgICAgICBnZXRTdHJlYW0oKTtcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICQoJy5lcnJvcicpLmFwcGVuZChcIjxsaT5cIiArIGRhdGEubWVzc2FnZSArIFwiPC9saT5cIik7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZSl7XG4gICAgICAgICAgJCgnLmVycm9yJykuYXBwZW5kKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiBnZXRTdHJlYW0oKXtcbiAgICAgICQuYWpheCh7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25wXCIsXG4gICAgICAgICAgdXJsOiBhcGlTdHJlYW1VUkwgKyBjaGFubmVsLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgcmVzdWx0Kz0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNcIjtcbiAgICAgICAgICAgIGlmKGRhdGEuc3RyZWFtID09IG51bGwpe1xuICAgICAgICAgICAgICByZXN1bHQrPVwiIG9mZmxpbmUnPlwiO1xuICAgICAgICAgICAgICByZXN1bHQrPVwiPGkgY2xhc3M9J3ByZXNlbmNlIGZhIGZ3IGZhLWNsb2NrLW8nPjwvaT5cIlxuICAgICAgICAgICAgICByZXN1bHQrPSBcIjxzcGFuIGNsYXNzPSdzdHJlYW0nPk9mZmxpbmU8L3NwYW4+XCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXN1bHQrPVwiIG9ubGluZSc+XCI7XG4gICAgICAgICAgICAgIHJlc3VsdCs9IFwiPGkgY2xhc3M9J3ByZXNlbmNlIGZhIGZ3IGZhLWNoZWNrLWNpcmNsZS1vJz48L2k+XCJcbiAgICAgICAgICAgICAgcmVzdWx0Kz0gXCI8c3BhbiBjbGFzcz0nc3RyZWFtJz5cIiArIGRhdGEuc3RyZWFtLmdhbWUrXCI8L3NwYW4+XCI7Ly9ubyBjbGFzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0Kz0gXCI8L2Rpdj48L2E+PC9zZWN0aW9uPlwiO1xuICAgICAgICAgICAgJCgnLnJlc3VsdCcpLmFwcGVuZChyZXN1bHQpOyAvL3JlbmRlciByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJlbmRlckNoYW5uZWxzKCk7XG59KTtcbiJdfQ==
