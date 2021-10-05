import argumentForm from './argumentForm';
import resultPanel from './resultPanel';
import chartList from './chartList';

export default {
  'stat-engine.reset': 'Reset',
  'stat-engine.reset-tooltip': 'Reset Data and Arguments',
  'stat-engine.example': 'Example',
  'stat-engine.example-tooltip': 'Load Example Data',
  'stat-engine.load-data': 'Load',
  'stat-engine.summary': 'Docs',
  'stat-engine.arguments': 'Arguments',
  ...argumentForm,
  ...resultPanel,
  ...chartList,
};
