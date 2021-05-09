import onlineImage from './assets/icons/icon-online.svg'
import budgetingImage from './assets/icons/icon-budgeting.svg'
import onboardingImage from './assets/icons/icon-onboarding.svg'
import apiImage from './assets/icons/icon-api.svg'

export default {
  features: [
    {
      id: '1',
      icon: onlineImage,
      title: 'Online Banking',
      description: `Our modern and Mobile applications allow you to keep track of your finances wherever you are in the world.`
    },
    {
      id: '2',
      icon: budgetingImage,
      title: 'Simple Budgeting',
      description: `See exactly where your money goes each month. Receive notifications when you're close to your hitting
      limits.`
    },
    {
      id: '3',
      icon: onboardingImage,
      title: 'Fast Onboarding',
      description: `We dont't do branches. Open your account in minutes online and start taking control of your finances right away.`
    },
    {
      id: '4',
      icon: apiImage,
      title: 'Open API',
      description: `Manage your saving, investments, pensions, and much more from one account. Tracking your money has never been easier.`
    },
  ],
  articles: [
    {
      id: '1',
      imageCover: 'https://i.imgur.com/5R0KHRJ.jpg',
      title: 'Receive money in any currency with no fees',
      author: 'By Claire Robinson',
      description: `The world is getting smaller and we’re becoming more mobile. So why should you be
      forced to only receive money in a single`
    },
    {
      id: '2',
      imageCover: 'https://i.imgur.com/7d6ucR5.jpg',
      title: 'Treat yourself without worrying about money',
      author: 'By Wilson Hutton',
      description: `Our simple budgeting feature allows you to separate out your spending and set
      realistic limits each month. That means you`
    },
    {
      id: '3',
    imageCover: 'https://i.imgur.com/zWdSHHa.jpg',
      title: 'Take your Easybank card wherever you go',
      author: 'By Wilson Hutton',
      description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases
      while you’re abroad. We’ll even show you`
    },
    {
      id: '4',
      imageCover: 'https://i.imgur.com/pMLNHxO.jpg',
      title: 'Our invite-only Beta accounts are now live!',
      author: 'By Claire Robinson',
      description: `After a lot of hard work by the whole team, we’re excited to launch our closed beta.
      It’s easy to request an invite through the site`
    },
  ]
}