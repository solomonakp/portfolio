import React from 'react';
import {
  Css,
  Git,
  Html,
  JavaScript,
  JestLogo,
  NextJs,
  ReactLogo,
  Sass,
  Strapi,
  VsCode,
  WebPack,
  FireBase,
  Bootstrap,
  MaterialUi,
  TypeScript,
  WordPress,
} from '../Svgs';

export interface skillObject {
  id: string;
  width: string;
  height: string;
  backgroundColor: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const skills: skillObject[] = [
  {
    Icon: Html,
    backgroundColor: '#F165294D',
    height: '59',
    id: 'html',
    width: '59',
  },
  {
    Icon: Css,
    backgroundColor: '#1572B666',
    height: '59',
    id: 'css',
    width: '59',
  },
  {
    Icon: JavaScript,
    backgroundColor: '#F7DF1E66',
    height: '59',
    id: 'javascript',
    width: '59',
  },
  {
    Icon: Sass,
    backgroundColor: '#CF649A66',
    height: '49',
    id: 'sass',
    width: '65',
  },
  {
    Icon: TypeScript,
    backgroundColor: '#007acc66',
    height: '59',
    id: 'typescript',
    width: '59',
  },
  {
    Icon: ReactLogo,
    backgroundColor: '#61DAFB4D',
    height: '70',
    id: 'react',
    width: '70',
  },
  {
    Icon: NextJs,
    backgroundColor: '#EFE8EB',
    height: '48',
    id: 'nextjs',
    width: '78',
  },
  {
    Icon: Bootstrap,
    backgroundColor: '#563D7C66',
    height: '47',
    id: 'bootstrap',
    width: '47',
  },
  {
    Icon: MaterialUi,
    backgroundColor: '#0081CB4D',
    height: '46',
    id: 'materialui',
    width: '58',
  },
  {
    Icon: WordPress,
    backgroundColor: '#21759B66',
    height: '48',
    id: 'wordpress',
    width: '48',
  },

  {
    Icon: Strapi,
    backgroundColor: '#8E75FF66',
    height: '76',
    id: 'strapi',
    width: '63',
  },
  {
    Icon: FireBase,
    backgroundColor: '#F6820C4D',
    height: '65',
    id: 'firebase',
    width: '47',
  },

  {
    Icon: WebPack,
    backgroundColor: '#1C78C04D',
    height: '74',
    id: 'webpack',
    width: '65',
  },

  {
    Icon: JestLogo,
    backgroundColor: '#99425B4D',
    height: '69',
    id: 'jestLogo',
    width: '62',
  },
  {
    Icon: Git,
    backgroundColor: '#DE4C3666',
    height: '62',
    id: 'git',
    width: '62',
  },
  {
    Icon: VsCode,
    backgroundColor: '#0877B966',
    height: '51',
    id: 'vscode',
    width: '52',
  },
];

export default skills;
