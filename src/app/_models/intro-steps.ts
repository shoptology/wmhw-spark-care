export interface IntroStep {
  title: string;
  icon: string;
  message: string;
}

export const INTROSTEPS: IntroStep[] = [
  {
    title: 'Share',
    icon: 'safety',
    message: 'Tap Share A Spark to recognize a fellow associate’s Moment of Care.',
  },
  {
    title: 'See',
    icon: 'kindness',
    message: 'See your own Moments of Care badges and notifications in My Dashboard.',
  },
  {
    title: 'Ask',
    icon: 'connection',
    message: 'Get support and answers to Frequently Asked Questions under the Help tab.',
  },
  {
    title: 'Done',
    icon: 'simplicity',
    message: 'That’s it. You’ve got this! Now start sharing!',
  },
];
