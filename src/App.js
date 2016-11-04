import React, { Component } from 'react';
import theme from './theme';
import {
  LandingCanvas,
  BigImageBrick,
  TitleBrick,
  CustomBrick,
  BigVideoBrick,
  NavigationBrick,
  SquizMailBrick,
  FeatureListBrick
} from 'landricks-components';

class App extends Component {
  render() {
    return (

      <LandingCanvas theme={ theme }>

        <NavigationBrick
          mode="FIXED"
          logo={ require('../images/logo.svg') }
          brand="Landricks Starter Kit"
          items={[
            { label: "Item 1" },
            { label: "Item 2" },
            { label: "Item 3" },
            { label: "Item Highlight", highlight: true }
          ]}
          bandStyle="Navigation"
        />

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
          bandStyle="Secondary"
          mode="IMAGE_ON_LEFT"
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
          mode="IMAGE_ON_BOTTOM"
          title="Landricks Starter Kit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          image={ require('../images/logo.svg') }
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
          bandStyle="BigImage"
        />

        <TitleBrick
          title="I'm a banner centered"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
        />

        <TitleBrick
          mode="TEXT_ON_LEFT"
          bandStyle="Secondary"
          title="I'm a banner with left align"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
        />

        <TitleBrick
          mode="TEXT_ON_RIGHT"
          title="I'm a banner with right align"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar lacinia tellus id fermentum. Nullam nunc est, congue suscipit posuere sit amet, hendrerit ac sapien. Nam commodo, nisi id rhoncus ultrices, arcu turpis eleifend arcu, a mollis elit ligula non ligula. "
          bandStyle="ImageBanner"
          contentStyle={{ backgroundImage: `url(${require('../images/background.jpg')})` }}
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
          bandStyle="Secondary"
          mode="VIDEO_ON_LEFT"
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
          mode="VIDEO_ON_BOTTOM"
          title="Big Video"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus eros non libero ultricies, non mollis ex molestie. Nulla facilisi. Fusce enim purus, ultricies id venenatis id, lobortis at enim."
          videoUrl="https://s3-us-west-2.amazonaws.com/coverr/mp4/Blurry-Lights.mp4"
          buttons={[
            { label: 'Button 1', onClick: () => alert('Click in Button 1!') },
            { label: 'Button 2', onClick: () => alert('Click in Button 2!') }
          ]}
        />

        <SquizMailBrick
          title="Squiz Mail Brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          placeholder="Your Email"
          buttonLabel="Submit"
          smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onSubmit={ (data) => alert(data.email) }
          bandStyle="Secondary"
          buttonStyle={{ color: '#FFF' }}
          inputStyle={{ borderColor: '#E91C63' }}
        />

        <SquizMailBrick
          title="Squiz Mail Brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          placeholder="Your Email"
          buttonLabel="Submit"
          smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onSubmit={ (data) => alert(data.email) }
        />

        <SquizMailBrick
          title="Squiz Mail Brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          placeholder=""
          buttonLabel="Subscribe"
          smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onSubmit={ (data) => alert(data.email) }
          bandStyle="Squiz"
          contentStyle={{ backgroundImage: `url(${require('../images/background-white.jpg')})` }}
          buttonStyle={{ color: '#FFF', backgroundColor: '#000' }}
        />

        <FeatureListBrick
          title="Feature List Brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          items={[
            { text: "Item 1", icon: "clock-o" },
            { text: "Item 2", icon: "check" },
            { text: "Item 3", icon: "dashboard" },
            { text: "Item 4", icon: "usd" }
          ]}
        />

        <FeatureListBrick
          title="Feature List Brick"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          items={[
            { text: "Item 1", icon: "clock-o" },
            { text: "Item 2", icon: "check" },
            { text: "Item 3", icon: "dashboard" },
            { text: "Item 4", icon: "usd" }
          ]}
          bandStyle="Secondary"
          itemStyle={{
            color: '#E91C63',
            backgroundColor: 'rgba(233, 28, 99, .15)',
            borderRadius: '50%',
            width: '180px',
            height: '170px',
            paddingTop: '80px'
          }}
        />

      </LandingCanvas>

    );
  }
}

export default App;
