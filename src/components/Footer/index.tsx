import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '智汇医圈联盟出品',
  });

  return (
    <DefaultFooter
      copyright={`2015-${new Date().getFullYear()} ${defaultMessage}`}
      links={[
        {
          key: 'biominer',
          title: 'BioMiner',
          href: 'https://www.yuque.com/biominer',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/biominer-lab',
          blankTarget: true,
        },
        {
          key: 'clinico-omics',
          title: 'ClinicoOmics',
          href: 'https://www.yuque.com/clinico-omics',
          blankTarget: true,
        },
      ]}
    />
  );
};
