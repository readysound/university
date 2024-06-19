import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';


const config: DocsThemeConfig = {
logo: (
<>
<img src="/logo.svg" alt="Readysound University Logo" width="24" height="24" />
<span style={{ marginLeft: '.4em', fontWeight: 500 }}>
Readysound University
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
