import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import 'whatwg-fetch';

import {
  LandingCanvas,
  ContextPropagator,
  GenericBrick,
  DoubleContentBrick,
  StrongMessageBrick,
  EnumerationBrick,
  EmailSqueezeBrick,
  CallToAction,
  FeatureItem,
  PlaceHolder,
  
  NavigationBrick
} from 'landricks-components';

class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <LandingCanvas>
        <NavigationBrick
          theme={ HEADER_BAND_THEME }
          mode="FIXED"
          brand="Landricks starter kit"
          logo={ require('./images/logo-1.svg') }
          contentStyle={{ padding: '1% 6.5%', textAlign: 'center' }}
          logoStyle={{ height: '35px' }}
          brandStyle={{ lineHeight: '32px', fontSize: '22px', marginLeft: '15px' }}
        />

        <StrongMessageBrick
          theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#0097a7", textColor: '#fff'}}
          messageLevel1="A beautiful message, but not so long"
          messageLevel2="A related but not so important concept, that usual…"
          CTAs={<CallToAction label="sign up" />}
        />

        <GenericBrick
          theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#FAFAFA"}}
          title="Yes, we can!"
          subtitle="if you think you can do it"
          contentStyle={{textAlign: "center"}}>
        <PlaceHolder/>
        </GenericBrick>

        <EnumerationBrick theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#4db6ac"}} title="Awesome features" subtitle="You can add any number of them">
          <FeatureItem icon="rocket" title="Feature 1" description="bla bla bla bla bla" />
          <FeatureItem icon="rocket" title="Feature 2" description="bla bla bla bla bla" />
          <FeatureItem icon="rocket" title="Feature 3" description="bla bla bla bla bla" />
        </EnumerationBrick>

        <GenericBrick
          theme={ LIGHT_BAND_THEME }
          title="How to use it"
          subtitle="Learn how to create your own brick web"
          contentStyle={ {textAlign: 'center'} }
          titleStyle={{ fontSize: '1.75em' }}
          subtitleStyle={{ fontSize: '1.25em' }}>
          <div style={{ textAlign: 'center' }}>
            <h3>This is a GenericBrick</h3>
          </div>
        </GenericBrick>

        <EnumerationBrick
          theme={ HEAVY_BAND_THEME }
          title="Enumeration Brick"
          titleStyle={{ fontSize: '1.75em', marginBottom: '5%' }}>
          <FeatureItem
            icon="clock-o"
            title="ITEM 1"
            wrapperStyle={{ padding: '4% 2%', borderBottom: '.25em solid #00838f' }}
            iconStyle={{ fontSize: '4em' }}
            titleStyle={{ marginTop: '6%', fontSize: '1.2em' }}
          />
          <FeatureItem
            icon="gears"
            title="ITEM 2"
            wrapperStyle={{ padding: '4% 2%', borderBottom: '.25em solid #00838f' }}
            iconStyle={{ fontSize: '4em' }}
            titleStyle={{ marginTop: '6%', fontSize: '1.2em' }}
          />
          <FeatureItem
            icon="thumbs-up"
            title="ITEM 3"
            wrapperStyle={{ padding: '4% 2%', borderBottom: '.25em solid #00838f' }}
            iconStyle={{ fontSize: '4em' }}
            titleStyle={{ marginTop: '6%', fontSize: '1.2em' }}
          />
        </EnumerationBrick>

        <DoubleContentBrick theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#eceff1"}} hasHeader={false}>
          <PlaceHolder useLoremIpsum />
          <PlaceHolder label="image placeholder" />
        </DoubleContentBrick>

        <DoubleContentBrick theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#cfd8dc"}} hasHeader={false}>
          <PlaceHolder label="image placeholder" />
          <PlaceHolder useLoremIpsum />
        </DoubleContentBrick>

        <DoubleContentBrick theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#eceff1"}} hasHeader={false}>
          <PlaceHolder useLoremIpsum />
          <PlaceHolder label="image placeholder" />
        </DoubleContentBrick>

        <EmailSqueezeBrick
          title="Join our Newsletter"
          subtitle="To get updates about what we want you to know abou…"
          theme={{fontFamily: "Lato", baseFontSize: "18px", backgroundColor: "#4db6ac"}}
          buttonLabel="Join"
          placeholder="Enter your email"
        />


      </LandingCanvas>
    );
  }
}

const BASE_THEME = {
  fontFamily: 'Open Sans',
  baseFontSize: '18px'
}

const HEADER_BAND_THEME = {
  ...BASE_THEME,
  baseFontSize: '18px',
  backgroundColor: '#3D4351',
  textColor: '#FFFFFF',
  primaryColor: '#FFFFFF',
  primaryContrastColor: '#8BC34A',
  objectDesign: 'square-solid'
}

const HEAVY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#4db6ac',
  textColor: '#FFFFFF',
  primaryColor: '#0097a7',
  primaryContrastColor: '#FFFFFF',
  secondaryColor: '#8D1042',
  objectDesign: 'square-solid'
};

const LIGHT_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#eceff1',
  textColor: '#3D4351',
  primaryColor: '#8BC34A',
  secondaryColor: '#3D4351',
  padding: 0
};

const FOOTER_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#3D4351',
  textColor: '#fff',
  primaryColor: '#8BC34A',
  fontSize: '1.2rem',
  secondaryColor: '#3D4351',
  padding: 0
};
const GALLERY_BAND_THEME = {
  ...BASE_THEME,
  backgroundColor: '#607d8b',
  textColor: '#fff',
  primaryColor: '#607d8b',
  fontSize: '1.2rem',
  secondaryColor: '#3D4351',
  padding: 0,
  indicatorColor: '#4db6ac',
  controlsColor: '#0288d1',
  // backgroundImage : require('./images/5.jpg')
};

const Gallery_Item = {
  flex : '1',
  // maxHeight: '50vh',
  width: '100%', 
  margin: '20px'
};

export default App;
