import type { Schema, Attribute } from '@strapi/strapi';

export interface ActivityActivityCard extends Schema.Component {
  collectionName: 'components_activity_activity_cards';
  info: {
    displayName: 'ActivityCard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    img_url: Attribute.Media;
    date: Attribute.Date;
  };
}

export interface ActivityActivityPage extends Schema.Component {
  collectionName: 'components_activity_activity_pages';
  info: {
    displayName: 'ActivityPage';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    link: Attribute.String;
    Activitytitle: Attribute.String;
  };
}

export interface ActivityActivityTitle extends Schema.Component {
  collectionName: 'components_activity_activity_titles';
  info: {
    displayName: 'Activity Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ActivityActivity extends Schema.Component {
  collectionName: 'components_activity_activities';
  info: {
    displayName: 'Activity';
    description: '';
  };
  attributes: {
    otheractivities: Attribute.Component<'activity.other-activities', true>;
    ActivityPage: Attribute.Component<'activity.activity-page'>;
  };
}

export interface ActivityOtherActivities extends Schema.Component {
  collectionName: 'components_activity_other_activities';
  info: {
    displayName: 'otherActivities';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    img_url: Attribute.Media;
  };
}

export interface BlocksAboutUsDetails extends Schema.Component {
  collectionName: 'components_blocks_about_us_details';
  info: {
    displayName: 'AboutUsDetails';
  };
  attributes: {
    vision: Attribute.Text;
    mission: Attribute.Text;
    goal: Attribute.Text;
    chairmanName: Attribute.String;
    chairmanMsg: Attribute.String;
    chairmanMsgTitle: Attribute.String;
    img_url: Attribute.Media;
  };
}

export interface BlocksAboutUs extends Schema.Component {
  collectionName: 'components_blocks_aboutuses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img_url: Attribute.Media;
    Details: Attribute.Component<'blocks.about-us-details'>;
  };
}

export interface BlocksPopularContent extends Schema.Component {
  collectionName: 'components_blocks_popular_contents';
  info: {
    displayName: 'PopularContent';
    description: '';
  };
  attributes: {
    blockTitle: Attribute.String;
    title: Attribute.String;
    items: Attribute.Component<'dashboard.content-card', true>;
    btn: Attribute.Component<'dashboard.button'>;
  };
}

export interface DashboardAbout extends Schema.Component {
  collectionName: 'components_dashboard_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    heading: Attribute.String;
    description: Attribute.Text;
    btn: Attribute.Component<'dashboard.button'>;
  };
}

export interface DashboardButton extends Schema.Component {
  collectionName: 'components_dashboard_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    styles: Attribute.JSON;
    link: Attribute.String;
    color: Attribute.Enumeration<['primary', 'secondary']>;
    date: Attribute.Date;
    description: Attribute.Text;
  };
}

export interface DashboardContentCard extends Schema.Component {
  collectionName: 'components_dashboard_content_cards';
  info: {
    displayName: 'ContentCard';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface DashboardHero extends Schema.Component {
  collectionName: 'components_dashboard_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img_url: Attribute.Media;
    btn: Attribute.Component<'dashboard.button'>;
  };
}

export interface DashboardNavbar extends Schema.Component {
  collectionName: 'components_dashboard_navbars';
  info: {
    displayName: 'navbar';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    items: Attribute.JSON;
  };
}

export interface FooterAboutAnsdd extends Schema.Component {
  collectionName: 'components_footer_about_ansdds';
  info: {
    displayName: 'About Ansdd';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    description: Attribute.Text;
  };
}

export interface FooterAboutWebsite extends Schema.Component {
  collectionName: 'components_footer_about_websites';
  info: {
    displayName: 'About Website';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterDocuments extends Schema.Component {
  collectionName: 'components_footer_documents';
  info: {
    displayName: 'Documents';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterMostViewed extends Schema.Component {
  collectionName: 'components_footer_most_viewed_s';
  info: {
    displayName: 'Most Viewed ';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface FooterSubscribeBanner extends Schema.Component {
  collectionName: 'components_footer_subscribe_banners';
  info: {
    displayName: 'subscribeBanner';
    description: '';
  };
  attributes: {
    description: Attribute.Text & Attribute.Required;
    title: Attribute.String;
    link: Attribute.String;
  };
}

export interface TeamsDutiesCard extends Schema.Component {
  collectionName: 'components_teams_duties_cards';
  info: {
    displayName: 'DutiesCard';
  };
  attributes: {
    role: Attribute.String;
  };
}

export interface TeamsTeamCard extends Schema.Component {
  collectionName: 'components_teams_team_cards';
  info: {
    displayName: 'TeamCard';
    description: '';
  };
  attributes: {
    img_url: Attribute.Media;
    designation: Attribute.String;
    name: Attribute.String;
    duties: Attribute.Component<'teams.duties-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'activity.activity-card': ActivityActivityCard;
      'activity.activity-page': ActivityActivityPage;
      'activity.activity-title': ActivityActivityTitle;
      'activity.activity': ActivityActivity;
      'activity.other-activities': ActivityOtherActivities;
      'blocks.about-us-details': BlocksAboutUsDetails;
      'blocks.about-us': BlocksAboutUs;
      'blocks.popular-content': BlocksPopularContent;
      'dashboard.about': DashboardAbout;
      'dashboard.button': DashboardButton;
      'dashboard.content-card': DashboardContentCard;
      'dashboard.hero': DashboardHero;
      'dashboard.navbar': DashboardNavbar;
      'footer.about-ansdd': FooterAboutAnsdd;
      'footer.about-website': FooterAboutWebsite;
      'footer.documents': FooterDocuments;
      'footer.most-viewed': FooterMostViewed;
      'footer.subscribe-banner': FooterSubscribeBanner;
      'teams.duties-card': TeamsDutiesCard;
      'teams.team-card': TeamsTeamCard;
    }
  }
}
