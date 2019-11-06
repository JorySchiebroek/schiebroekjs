export const DESIGN_SKILLS = ['Analysing', 'Concepting', 'Design', 'UX', 'Testing'];

export const DESIGN_TOOLS = ['sketch', 'photoshop', 'illustrator', 'figma'];

export const DEVELOPMENT_SKILLS = ['HTML', 'Javascript', 'Scss', 'Angular', 'React', 'Vue', 'Ruby'];

export const DEVELOPMENT_TOOLS = ['iterm', 'postman', 'vscode'];

export const LOCALES = ['en', 'da', 'nl'];

export const PARTNERS = [
    '../assets/logos/disney.svg',
    '../assets/logos/grundfos.svg',
    '../assets/logos/quickpay.svg',
    '../assets/logos/littlestudio.svg',
    '../assets/logos/inetdesign.png',
    '../assets/logos/lyshygge.png'
];

export const PROJECTS: Array<any> = [{
    name: 'disney',
    icon: ['fas', 'gamepad'],
    bg: '../assets/disney/disney_bg.jpg',
    title: 'Ice Picker',
    subtitle: 'Walt Disney Company',
    tags: ['Game'],
    description: 'For my 2017 internship at the Walt Disney Company \
        in the Netherlands, I worked on the concepting, designing and developing phases of a Christmas mini-game for Disney XD.',
    tools: ['HTML', 'CSS', 'Javascript', 'Phaser'],
    buttons: {
    }
}, {
    name: 'brofish',
    icon: ['fab', 'react'],
    bg: '../assets/brofish/brofish_bg.gif',
    title: 'Brofish',
    subtitle: 'Fishing HUB',
    tags: ['webapp'],
    description: 'When I moved to Denmark, I discovered the fishing sport. \
        I needed to learn a lot of information and decided to develop an app to keep track of what I caught, where, and how.',
    tools: ['HTML', 'CSS', 'Javascript', 'Angular', 'React', 'Photoshop'],
    buttons: {
        demo: 'https://brofish-react.firebaseapp.com/'
    }
}, {
    name: 'belastingdienst',
    icon: ['fas', 'tablet-alt'],
    bg: '../assets/belastingdienst/belastingdienst_bg.png',
    title: 'FTO',
    subtitle: 'Tax Authority (NL)',
    tags: ['App'],
    description: 'For my 2018 graduate internship at the Dutch Tax Authority, \
        I worked on the design of an app that would fix a communication problem within the Dutch Customs.',
    tools: ['Sketch', 'Photoshop'],
    remote: '',
    buttons: {
        google: 'https://play.google.com/store/apps/developer?id=Belastingdienst&hl=nl',
        apple: 'https://apps.apple.com/nl/developer/belastingdienst/id562870506#see-all/i-phonei-pad-apps'
    }
}, {
    name: 'grundfos',
    icon: ['fas', 'mobile-alt'],
    bg: '../assets/grundfos/grundfos_bg.png',
    title: 'GO Remote',
    subtitle: 'Grundfos',
    tags: ['App'],
    description: 'I started Schiebroek.js in 2017, and my work was mainly for a Danish design studio called Little Studio. \
        I got the opportunity to work on the design for a mobile toolbox app for Grundfos.',
    tools: ['Sketch', 'Photoshop'],
    remote: '',
    buttons: {
        google: 'https://play.google.com/store/apps/details?id=com.grundfos.go&hl=nl',
        apple: 'https://apps.apple.com/us/app/grundfos-go-remote/id524685121'
    }
}, {
    name: 'membership',
    icon: ['fab', 'vuejs'],
    bg: '../assets/membership/membership_bg.jpg',
    title: 'Membership',
    subtitle: 'Subscription Manager',
    tags: ['webapp'],
    description: 'I completed the minor Digital Experience Design at Fontys University in Eindhoven in 2017, \
        and during that minor I built a digital dashboard to manage all kinds of subscriptions.',
    tools: ['HTML', 'CSS', 'Javascript', 'Vue', 'Photoshop'],
    remote: '',
    buttons: {
        demo: 'https://membership-d924e.web.app/'
    }
}, {
    name: 'checkme',
    icon: ['fab', 'vuejs'],
    bg: '../assets/checkme/checkme_bg.jpg',
    title: 'Check me',
    subtitle: 'SoMe Monitor',
    tags: ['webapp'],
    description: 'During my education at Avans University I built a platform to monitor your online behaviour on various social media.',
    tools: ['HTML', 'CSS', 'Javascript', 'Vue'],
    remote: '',
    buttons: {
        demo: 'https://check-me-2016.web.app/'
    }
}];

export const SOME = [{
    icon: ['fab', 'dribbble'],
    href: 'https://dribbble.com/JorySchiebroek'
}, {
    icon: ['fab', 'linkedin'],
    href: 'https://www.linkedin.com/in/jory-schiebroek'
}, {
    icon: ['fab', 'github'],
    href: 'https://github.com/JorySchiebroek'
}, {
    icon: ['fab', 'stack-overflow'],
    href: 'https://stackoverflow.com/users/12291204/jsc'
}, {
    icon: ['fas', 'envelope'],
    href: 'mailto:joryschiebroek@gmail.com'
}];
