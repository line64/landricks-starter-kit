import React, { Component } from 'react';
import theme from './theme';
import {
  LandingCanvas,
  BigImageBrick,
  BannerBrick,
  CustomBrick,
  BigVideoBrick
} from 'landricks-components';

class App extends Component {
  render() {
    return (

      <LandingCanvas theme={ theme }>

        <BigImageBrick
          title="Landricks Starter Kit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          image={ require('../images/logo.svg') }
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
        />

        <BigImageBrick
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

        <BigImageBrick
          imageOnBottom
          title="Landricks Starter Kit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          image={ require('../images/logo.svg') }
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
          bandStyle="BigImage"
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

        <CustomBrick
          title="I'm a custom brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar lacinia tellus id fermentum. Nullam nunc est, congue suscipit posuere sit amet, hendrerit ac sapien. Nam commodo, nisi id rhoncus ultrices, arcu turpis eleifend arcu, a mollis elit ligula non ligula. "
        >
          <div>
            <img src={ require('../images/logo.svg') } height="150" style={{ position: 'relative', top: '-100px' }} alt="presentation" />
            <img src={ require('../images/logo.svg') } height="250" alt="presentation" />
            <img src={ require('../images/logo.svg') } height="150" style={{ position: 'relative', top: '-100px' }} alt="presentation" />
          </div>
        </CustomBrick>

        <BigVideoBrick
          title="Big Video"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          videoUrl="https://s3-us-west-2.amazonaws.com/coverr/mp4/Blurry-Lights.mp4"
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
          bandStyle="BigVideo"
        />

        <BigVideoBrick
          secondaryBrick
          videoOnRight
          title="Big Video"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          videoUrl="https://s3-us-west-2.amazonaws.com/coverr/mp4/Blurry-Lights.mp4"
          content={
            <div style={{ textAlign: 'right' }}>
              <img src={ require('../images/logo.svg') } height="100" style={{ position: 'relative', top: '-80px' }} alt="presentation" />
              <img src={ require('../images/logo.svg') } height="200" alt="presentation" />
              <img src={ require('../images/logo.svg') } height="100" style={{ position: 'relative', top: '-80px' }} alt="presentation" />
              <img src={ require('../images/logo.svg') } height="200" alt="presentation" />
              <img src={ require('../images/logo.svg') } height="100" style={{ position: 'relative', top: '-80px' }} alt="presentation" />
            </div>
          }
        />

        <BigVideoBrick
          videoOnBottom
          title="Big Video"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          videoUrl="https://s3-us-west-2.amazonaws.com/coverr/mp4/Blurry-Lights.mp4"
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
        />

      </LandingCanvas>

    );
  }
}

export default App;
