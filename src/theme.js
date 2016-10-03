
export default {

  defaultFontFamily: 'Open Sans, sans-serif',
  defaultFontSize: '70%',

  bandStyleBigImage: {
    contentStyle: {
      background: '#32409F'
    }
  },

  bandStyleBigVideo: {
    contentStyle: {
      background: '#32409F'
    }
  },

  bandStyleImageBanner: {
    contentStyle: {
      background: `url(${ require('../images/background.jpg') }) center no-repeat`,
      backgroundSize: 'cover'
    },
    subtitleStyle: {
    	paddingLeft: '50%'
    }
  }
  
};