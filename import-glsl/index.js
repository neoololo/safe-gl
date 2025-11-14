import loader from "./vite.js";

export const testImportModuleSpecifier = /** @type {ImportablePlugin['testImportModuleSpecifier']} */ (moduleName) => (
	moduleName.endsWith('.glsl')
);

export const testImportAttributes = /** @type {ImportablePlugin['testImportAttributes']} */ (importAttributes) => true;

export const generateTypeScriptDefinition = /** @type {ImportablePlugin['generateTypeScriptDefinition']} */ (_fileName, _importAttributes, code) => {
	console.log(loader);
	const l = loader().transform;
	return l(code, _fileName, { ts: true });
};
