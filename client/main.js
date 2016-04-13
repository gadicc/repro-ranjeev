import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.myHome.events({
  "click .examine": function(event){
      event.preventDefault();

      $('#see').remove();
      $('#imagesShown').hide();

      var myContainer = document.getElementById('myContainer');
      var keyImg = $(event.currentTarget).closest('.shadow').find('.imgRef').val();
      var keyUser = $(event.currentTarget).closest('.shadow').find('.imgRef1').val();

      console.log('IMG: ' + keyImg + ' USER: ' + keyUser);
      //Meteor.call('getDetailsUser',keyImg,keyUser, function(err,result){
      //    if(err){
      //        console.log(err.reason);
      //        return;
      //    }
      //    //console.log(result);
      //    Blaze.renderWithData(Template.see,result,myContainer);
      //});

      var userDetails = new ReactiveVar('waiting...');
      var userDetailsContext = function() { return userDetails.get() };
      Blaze.renderWithData(Template.see, userDetailsContext, myContainer);
      Meteor.call('getDetailsUser', keyImg, keyUser, (err, result) => {
          // if (err) ...
          userDetails.set(result);
      });

      yPos = event.pageY;
      yOffset = event.screenY;

  }
});
