import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';


const config: DocsThemeConfig = {
logo: (
<>
<img src="/logo.svg" alt="Readysound University Logo" width="25" height="25" />
<span style={{ marginLeft: '.4em', fontWeight: 500, fontSize: '1.2em' }}>
Readysound
</span>
</>
),
project: {
link: 'https://github.com/shuding/nextra-docs-template',
},
chat: {
link: 'https://discord.com',
},
docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
footer: {
text: 'Nextra Docs Template',
},
};


export default config;
