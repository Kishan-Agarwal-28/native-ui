import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const root = process.cwd();
const componentsDir = path.join(root, 'apps', 'ui-dev', 'src', 'components', 'ui');
const registriesDir = path.join(root, 'registries');

const categoryByKey = {
  accordion: 'layout',
  'alert-dialog': 'feedback',
  alert: 'feedback',
  'aspect-ratio': 'layout',
  avatar: 'primitives',
  badge: 'primitives',
  'button-group': 'primitives',
  button: 'primitives',
  calendar: 'forms',
  card: 'layout',
  carousel: 'navigation',
  checkbox: 'forms',
  'date-picker': 'forms',
  dialog: 'feedback',
  empty: 'feedback',
  field: 'forms',
  'input-otp': 'forms',
  input: 'forms',
  label: 'typography',
  progress: 'feedback',
  'radio-group': 'forms',
  select: 'forms',
  separator: 'layout',
  skeleton: 'feedback',
  sonner: 'feedback',
  spinner: 'feedback',
  switch: 'forms',
  table: 'layout',
  textarea: 'forms',
  typography: 'typography',
};

const titleByKey = (key) =>
  key
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const stripComments = (input, fileName) => {
  const sourceFile = ts.createSourceFile(
    fileName,
    input,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  );
  const printer = ts.createPrinter({ removeComments: true });
  return printer.printFile(sourceFile).trimEnd();
};

const getImports = (source) =>
  [...source.matchAll(/from\s+['"]([^'"]+)['"]/g)].map((match) => match[1]);

const isExternalImport = (specifier) =>
  !specifier.startsWith('.') &&
  !specifier.startsWith('@/lib/') &&
  !specifier.startsWith('@/components/ui/') &&
  specifier !== 'react' &&
  specifier !== 'react-native';

fs.mkdirSync(registriesDir, { recursive: true });

const files = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith('.tsx'))
  .sort((a, b) => a.localeCompare(b));

const bulkData = [];

for (const file of files) {
  const key = path.basename(file, '.tsx');
  const source = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  const imports = getImports(source);
  const dependencies = [...new Set(imports.filter(isExternalImport))].sort((a, b) => a.localeCompare(b));
  const registryDependencies = [...new Set(imports.filter((specifier) => specifier.startsWith('@/components/ui/')).map((specifier) => path.basename(specifier)))].sort((a, b) => a.localeCompare(b));

  const manifest = {
    $schema: 'https://nativeui.qzz.io/schema/registry-item.json',
    name: key,
    type: 'registry:component',
    title: titleByKey(key),
    description: `${titleByKey(key)} component`,
    registryDependencies,
    dependencies,
    category: categoryByKey[key] ?? 'layout',
    files: [
      {
        path: `components/ui/${file}`,
        type: 'registry:component',
        target: `components/ui/${file}`,
        content: stripComments(source, file),
      },
    ],
  };

  const manifestJson = JSON.stringify(manifest, null, 2);

  fs.writeFileSync(
    path.join(registriesDir, `${key}.json`),
    `${manifestJson}\n`,
    'utf8'
  );

  bulkData.push({
    key: key,
    value: manifestJson
  });
}

fs.writeFileSync(path.join(root, 'bulk-upload.json'), JSON.stringify(bulkData));
console.log('✅ Created individual registries and bulk-upload.json successfully!');