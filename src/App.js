import React, { Component } from 'react';
import './App.css';

import {
  LandingCanvas,
  MainTitleBrick,
  AppTitleBrick,
  FeatureListBrick
} from './landricks-components/src';

class App extends Component {
  render() {
    return (
      <LandingCanvas>
        <AppTitleBrick
          title="It's time for Growing App!"
          subtitle="A chat app to stay connected with other parents from your kid's class. All the information you need, neatly organized, just the way you like it"
          screenshotUrl={require('./screenshot.jpg')}
          bandStyle="A"
        />
        <FeatureListBrick
          title="Features"
          subtitle="to make your life simpled"
          bandStyle="C"
          features={[
            { key: 1, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 2, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 3, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'}
          ]}
        />
        <FeatureListBrick
          title="Features"
          subtitle="to make your life simpled"
          bandStyle="B"
          features={[
            { key: 1, icon: 'rocket', title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 2, icon: 'camera', title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 3, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 4, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 5, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 6, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 7, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'},
            { key: 8, title: 'automatic contact', description: 'just select your school and grade and you will have access to the complete list of parents automatically'}
          ]}
        />
        <MainTitleBrick
          title="It's time for Growing App!"
          subtitle="A chat app to stay connected with other parents from your kid's class"
          bandStyle="A"
          cta={{ text: 'baja el app ios' }}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat mi in efficitur aliquet. Nam suscipit enim nec diam malesuada dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non condimentum urna, sed convallis ex. Maecenas fermentum quis neque placerat commodo. Maecenas nec gravida tortor. Nunc lobortis facilisis turpis non dignissim. Suspendisse tincidunt tempor sagittis. Phasellus placerat odio eu turpis consectetur dignissim. Quisque in massa elit. Integer elementum lacinia arcu quis sodales.</p>
      </LandingCanvas>
    );
  }
}

export default App;
