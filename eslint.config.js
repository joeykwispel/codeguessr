import js from '@eslint/js';
import ts from 'typescript-eslint';
import angular from 'angular-eslint';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default ts.config(
  {
    files: ['**/*.ts'],
    extends: [js.configs.recommended, ...ts.configs.recommended, ...angular.configs.tsRecommended, prettier],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }]
    }
  },
  {
    // Templates: Angular's accessibility rules on top of the recommended set
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility]
  },
  {
    files: ['**/*.js', '**/*.mjs', 'scripts/**', 'e2e/**', 'supabase/**', '*.config.ts'],
    extends: [js.configs.recommended, ...ts.configs.recommended, prettier],
    languageOptions: { globals: { ...globals.node } }
  },
  { ignores: ['dist/', '.angular/', 'node_modules/', 'out-tsc/', 'test-results/', 'playwright-report/', '.lighthouseci/', 'coverage/'] }
);
