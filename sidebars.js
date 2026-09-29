/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {type: 'doc', id: 'intro', label: 'はじめに'},
    {type: 'doc', id: 'installation', label: '導入'},
    {type: 'doc', id: 'quick-start', label: 'クイックスタート'},
    {
      type: 'category',
      label: '基本設定',
      collapsed: false,
      items: [
        {type: 'doc', id: 'teleport-point', label: 'テレポートポイント'},
        {type: 'doc', id: 'connection', label: '接続'},
      ],
    },
    {
      type: 'category',
      label: '移動ルール',
      collapsed: false,
      items: [
        {type: 'doc', id: 'random', label: 'ランダム'},
        {type: 'doc', id: 'area-capacity', label: 'エリア・定員'},
        {type: 'doc', id: 'distribution', label: '分散'},
        {type: 'doc', id: 'full-message', label: '満員時メッセージ'},
      ],
    },
    {
      type: 'category',
      label: '演出・通知',
      collapsed: false,
      items: [
        {type: 'doc', id: 'fade', label: 'Fade'},
        {type: 'doc', id: 'arrival-notification', label: '到着通知'},
      ],
    },
    {type: 'doc', id: 'update', label: 'アップデート'},
    {type: 'doc', id: 'faq', label: 'FAQ'},
  ],
};

export default sidebars;
