declare module 'gh-showcase' {
  import { ComponentType } from 'react';

  export interface ShowcaseProps {
    username: string;
    theme?: 'light' | 'dark';
    [key: string]: any;
  }

  export const Showcase: ComponentType<ShowcaseProps>;
  export function useGitHubPRs(username: string): any;
  export function useGitHubProfile(username: string): any;
}
