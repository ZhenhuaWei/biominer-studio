import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  headerHeight: 48,
  title: 'BioMiner',
  pwa: false,
  logo: 'http://nordata-cdn.oss-cn-shanghai.aliyuncs.com/clinico-omics/logo.png',
  iconfontUrl: '',
};

export default Settings;
