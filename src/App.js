import React, { Component } from 'react';
import theme from './theme';
import {
  LandingCanvas,
  AppTitleBrick,
  BannerBrick
} from 'landricks-components';

class App extends Component {
  render() {
    return (

      <LandingCanvas theme={ theme }>

        <AppTitleBrick
          title="Landricks Starter Kit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          image={ require('../images/logo.svg') }
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
        />

        <AppTitleBrick
          secondaryBrick
          imageOnRight
          title="Landricks Starter Kit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          image={ require('../images/logo.svg') }
          content={
            <div>
              <hr style={{ borderTop: '1px solid #747474', opacity: '.5' }} />
              <h3 style={{ textAlign: 'right' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            </div>
          }
        />

        <BannerBrick
          title="I'm a banner centered"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
        />

        <BannerBrick
          textOnLeft
          secondaryBrick
          title="I'm a banner with left align"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
        />

        <BannerBrick
          textOnRight
          title="I'm a banner with right align"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar lacinia tellus id fermentum. Nullam nunc est, congue suscipit posuere sit amet, hendrerit ac sapien. Nam commodo, nisi id rhoncus ultrices, arcu turpis eleifend arcu, a mollis elit ligula non ligula. "
          bandStyle="ImageBanner"
        />

      </LandingCanvas>

    );
  }
}

export default App;
