import { AppFile, DesktopDir, Dir, LinkFile, SymlinkFile, SystemDir } from 'beans';
import * as wallpaperMap from 'images/wallpapers';
import {
  AttributionWindow,
  BrowserWindow,
  FinderWindow,
  PaypalWindow,
  TerminalWindow,
} from 'windows';
import { bio, educations, projects, workExperiences } from 'data';

class RootDir extends SystemDir {
  constructor(children) {
    super(children, 'root', null);
  }

  getUserDir(user = 'jay') {
    return this.getChild('users', user);
  }

  getDesktopDir() {
    const userDir = this.getUserDir();
    return userDir && userDir.getChild('desktop');
  }

  getAppsDir() {
    const userDir = this.getUserDir();
    return userDir && userDir.getChild('apps');
  }

  getApps() {
    const appsDir = this.getAppsDir();
    return appsDir && appsDir.children;
  }

  remove() {
    this.children = [];
  }

  get pathKeys() {
    return [];
  }

  static get instance() {
    if (this.rootDir) {
      return this.rootDir;
    }

    const attribution = new AppFile(AttributionWindow);
    const browser = new AppFile(BrowserWindow, { pinned: false });
    const finder = new AppFile(FinderWindow, { defaultUrl: '/finder/users/jay/desktop' });
    const paypal = new AppFile(PaypalWindow);
    const terminal = new AppFile(TerminalWindow);

    const wallpaperKeys = Object.keys(wallpaperMap);

    this.rootDir = new RootDir({
      users: new SystemDir({
        jay: new SystemDir({
          apps: new SystemDir({
            finder,
            terminal,
            paypal,
            attribution,
            browser,
          }),
          desktop: new DesktopDir({
            projects: new Dir(projects),
            work_experience: new Dir(workExperiences),
            education: new Dir(educations),
            terminal: new SymlinkFile(terminal),
            instagram: new LinkFile(bio.links.instagram),
            linkedin: new LinkFile(bio.links.linkedin),
            paypal: new SymlinkFile(paypal),
            github: new LinkFile(bio.links.github),
            resume: new LinkFile(bio.links.resume),
            email: new LinkFile(`mailto:${bio.email}`),
            attribution: new SymlinkFile(attribution),
          }, wallpaperKeys[Math.random() * wallpaperKeys.length | 0]),
        }),
      }),
    });

    return this.rootDir;
  }
}

export default RootDir;
