import path from 'node:path/posix';
import process from 'node:process';
import {
  Creator,
  checkNodeVersion,
  checkUpdate,
  colors,
  initGitRepo,
  prompts,
  selectCodeLinter,
  selectNodeVersion,
  selectNpmRegistry,
} from 'create-creator';
import { pkgDescription, pkgName, pkgVersion } from './const';

const templates = {
  react: {
    label: 'React',
    hint: 'React-Router + Vite + Unocss + Valtio',
  },
  vue: {
    label: 'Vue3',
    hint: 'Vue-Router(File-based Routing) + Vite + UnoCSS + Pinia',
  },
};

export async function createCLI() {
  const creator = new Creator({
    projectPath: process.argv[2],
    templatesRoot: path.join(__dirname, '../templates'),
    toTemplateOptions(context) {
      return context.templateNames.map((name) => ({
        value: name,
        label: templates[name as keyof typeof templates]?.label,
        hint: templates[name as keyof typeof templates]?.hint,
      }));
    },
    async extendData() {
      const nodeVersion = await selectNodeVersion();
      const npmRegistry = await selectNpmRegistry();
      const codeLinter = await selectCodeLinter();

      return {
        nodeVersion,
        npmRegistry,
        codeLinter,
      };
    },
  });

  creator.on('before', async ({ projectPath }) => {
    prompts.intro(colors.bold(colors.bgCyan(` ${pkgName}@${pkgVersion} `)));
    prompts.log.info(pkgDescription);

    checkNodeVersion(18);
    await checkUpdate({
      name: pkgName,
      version: pkgVersion,
      projectPath,
    });
  });

  creator.on('end', async ({ projectRoot, projectPath }) => {
    initGitRepo(projectRoot);

    prompts.log.success('The project has been created successfully!');
    prompts.log.success(`${colors.bold(colors.greenBright(`cd ${projectPath}`))} to start your coding journey`);
    prompts.outro('🎉🎉🎉');
  });

  creator.writeIntercept(['*/eslint*', '*/prettier*', '*/_prettier*'], (meta, data) => ({
    disableWrite: data.codeLinter !== 'eslint',
  }));

  creator.writeIntercept(['*/biome.*'], (meta, data) => ({
    disableWrite: data.codeLinter !== 'biome',
  }));

  await creator.create();
}
