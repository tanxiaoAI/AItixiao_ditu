export const mapData = {
  header: {
    title: "自媒体AI提效地图",
    subtitle: "一张图看清自媒体值得做的AI提效环节",
  },
  profiles: [
    {
      id: "tanxiao",
      name: "谭啸",
      tags: ["前腾讯资深产品经理", "流程诊断", "AI业务提效", "工作流设计"],
      value: "专注业务流程改造，将AI最大程度接入业务，实现降本增效",
      avatarAlt: "谭啸头像",
      image: "tanxiao.jpg",
      wechat: "asdfg4355",
      qrCode: "tanxiao_erweima.jpg",
      actionText: "你想将业务变得系统高效",
      buttonText: "预约AI提效诊断",
      wechatNote: "加微信时请备注「AI提效」"
    },
    {
      id: "xiyue",
      name: "汐月Amy",
      tags: ["资深创业者", "低粉高客单", "一人公司增长", "个人IP"],
      value: "专注解决自媒体获客和增长问题，帮助企业搭建业务增长系统",
      avatarAlt: "汐月Amy头像",
      image: "xiyue.jpg",
      wechat: "AmyW1023",
      qrCode: "xiyue_erweima.jpg",
      actionText: "你现在更缺增长和获客",
      buttonText: "预约获客增长诊断",
      wechatNote: "加微信时请备注「获客增长」"
    }
  ],
  contact: {
    wechat: "asdfg4355",
    note: "加微信时请备注「AI提效」",
  },
  cta: {
    title: "看完地图，下一步做什么？",
    description:
      "如果你已经感受到流程混乱、AI没用好，下一步不是继续找更多工具，而是先判断最该优先优化的模块。",
    assessmentTitle: "AI提效自测",
    assessmentDescription:
      "用一套结构化问卷，快速看清你当前更该优先优化内容获客、线索转化还是交付服务。",
    assessmentButton: "开始AI提效自测",
    diagnosisTitle: "AI提效诊断",
    diagnosisDescription:
      "如果你已经知道自己有问题，但不确定优先级和路径，可以直接进入进一步诊断。",
    diagnosisButton: "预约AI提效诊断",
  },
  instructions: {
    targetAudience: "做自媒体获客、私域成交、知识服务或咨询陪跑的老板",
    howToUse: [
      "先找到你当前最卡的一段流程",
      "再看这个流程下的高ROI场景",
      "最后根据标签判断哪些适合优先做"
    ],
    paths: {
      solo: {
        title: "一人公司优先",
        desc: "如果你是一人公司，优先看这些场景：高频、重复、可模板化、能直接减轻你个人负担的环节"
      },
      team: {
        title: "小团队优先",
        desc: "如果你是小团队，优先看这些场景：高频、重复、团队口径不统一、老板仍需亲自把关的环节"
      }
    }
  },
  modules: [
    {
      id: "content",
      title: "内容获客系统",
      description: "AI不是替你写内容，而是帮你把内容获客从老板脑力活，升级成可沉淀、可判断、可复盘的系统。",
      icon: "Megaphone",
      color: "cyan",
      isSystemView: true,
      scenarios: [
        {
          name: "内容资产库",
          painPoint: "搞定素材散乱、案例难找、重复构思，告别无效内耗",
          aiSolution: "自动归档分类全量内容，智能打标，一键检索复用所有素材",
          effect: "沉淀可复用内容资产，创作不用从零开始，省时又省力",
          tags: { roi: "高", complexity: "低", target: ["一人公司", "小团队"] }
        },
        {
          name: "选题系统",
          painPoint: "摆脱选题靠灵感、方向杂乱、抓不住客户真实需求的困境",
          aiSolution: "聚合客户痛点与爆款数据，智能聚类排序，产出高转化选题池",
          effect: "选题精准有依据，直击客户痛点，内容稳定引流获客",
          tags: { roi: "高", complexity: "低", target: ["一人公司", "小团队"] }
        },
        {
          name: "脚本生产",
          painPoint: "破解写稿卡顿、搭框架慢、有想法写不出的创作难题",
          aiSolution: "快速生成脚本框架与初稿，提炼爆款标题，直接进入优化阶段",
          effect: "告别空白页焦虑，大幅提升出稿效率，专注输出核心价值",
          tags: { roi: "高", complexity: "低", target: ["一人公司", "小团队"] }
        },
        {
          name: "复盘分析",
          painPoint: "杜绝发完就忘、只看流量不看转化、内容无法优化的痛点",
          aiSolution: "分析数据与客户反馈，定位高转化内容，反向回流优化体系",
          effect: "打造闭环获客模式，内容越做越精准，流量变精准客源",
          tags: { roi: "高", complexity: "中", target: ["一人公司", "小团队"] }
        }
      ]
    },
    {
      id: "conversion",
      title: "线索转化",
      description: "不是让AI替你聊天，而是让AI协助你更稳定地承接咨询、识别客户、推进成交。",
      icon: "Magnet",
      color: "orange",
      isSystemView: true,
      scenarios: [
        {
          name: "销售知识库",
          painPoint: "摆脱沟通全靠临场发挥，统一团队标准，让优质成交经验可复制不流失",
          aiSolution: "沉淀全链路获客成交经验，自动迭代优化，持续赋能全流程客户沟通",
          effect: "个人经验变团队系统资产，承接、筛选、成交全链路越用越精准高效",
          tags: { roi: "极高", complexity: "中", target: ["一人公司", "小团队"] }
        },
        {
          name: "公域承接",
          painPoint: "告别公域私信乱回复，不浪费高意向客户，不消耗精力在无效咨询上",
          aiSolution: "智能识别客户意图与价值，精准筛选，自然导流优质用户进入私域",
          effect: "盘活公域流量，高效锁定精准客户，轻松把私信变成高质量私域线索",
          tags: { roi: "高", complexity: "低", target: ["一人公司", "小团队"] }
        },
        {
          name: "私域筛选",
          painPoint: "打破私域只加人不筛选的困境，不再把时间浪费在不匹配的客户身上",
          aiSolution: "快速分析客户需求与资质，智能分层分级，自动判定最优跟进方向",
          effect: "秒筛高价值精准客户，杜绝无效内耗，让私域运营高效又省心",
          tags: { roi: "高", complexity: "中", target: ["小团队"] }
        },
        {
          name: "成交推进",
          painPoint: "终结盲目跟进、临场谈单，精准攻克客户犹豫点，不流失意向客户",
          aiSolution: "拆解客户成交顾虑，匹配专属话术与方案，科学把控跟进节奏促转化",
          effect: "告别硬催单，顾问式专业促单，稳稳提升客户成交率与转化效率",
          tags: { roi: "高", complexity: "高", target: ["一人公司", "小团队"] }
        },
        {
          name: "复盘分析",
          painPoint: "告别全流程盲运营，分不清高价值线索、高转化话术，做单经验无法沉淀复用",
          aiSolution: "全量复盘公私域沟通与成交数据，精准提炼高转化客户画像与高效谈单方法论",
          effect: "承接筛选转化全链路持续优化，优质经验标准化复制，获客成交越做越轻松",
          tags: { roi: "高", complexity: "高", target: ["一人公司", "小团队"] }
        }
      ]
    },
    {
      id: "delivery",
      title: "交付服务",
      description: "AI不是替你做服务，而是帮你把客户从开案准备、过程答疑到结果跟踪，做成更稳定的交付系统",
      icon: "Briefcase",
      color: "emerald",
      isSystemView: true,
      scenarios: [
        {
          name: "业务知识库",
          painPoint: "告别交付做完无总结、问题反复踩坑、团队能力无法复制，杜绝经验只留在个人脑子里",
          aiSolution: "全链路复盘交付数据与问题，提炼可优化点，沉淀标准方法论与避坑指南",
          effect: "越交付越专业，问题越做越少，团队能力批量复制，服务体系持续迭代升级",
          tags: { roi: "极高", complexity: "高", target: ["一人公司", "小团队"] }
        },
        {
          name: "交付准备",
          painPoint: "杜绝新客信息杂乱、反复提问、认知错位，彻底避免后续交付扯皮返工",
          aiSolution: "一键整理客户信息、生成专属档案，智能归类客户并输出标准化开案交付清单",
          effect: "客户启动零混乱，团队认知全统一，全程交付高效顺畅不补漏",
          tags: { roi: "高", complexity: "低", target: ["一人公司", "小团队"] }
        },
        {
          name: "交付过程",
          painPoint: "终结重复答疑、资料难找、人力内耗，摆脱服务质量全靠核心人员的困境",
          aiSolution: "自动归集客户问题、匹配精准答案，生成服务纪要并智能标记风险/重点客户",
          effect: "交付效率翻倍提升，团队口径全程统一，客户体验稳定可控不翻车",
          tags: { roi: "高", complexity: "中", target: ["小团队"] }
        },
        {
          name: "结果跟踪",
          painPoint: "告别客户进度盲猜、续费流失凭感觉，解决服务无成果、优质案例不沉淀的难题",
          aiSolution: "复盘客户全周期数据，精准锁定高潜/流失客户，自动生成成果报告与续费提醒",
          effect: "客户状态一目了然，续费转化精准高效，成果可沉淀、复购转介绍自然暴涨",
          tags: { roi: "高", complexity: "中", target: ["一人公司", "小团队"] }
        },
        {
          name: "复盘分析",
          painPoint: "交付做完无总结、问题反复踩坑、团队能力无法复制，经验只留在个人脑子里",
          aiSolution: "全链路复盘交付数据与问题，提炼可优化点，沉淀标准方法论与避坑指南",
          effect: "越交付越专业，问题越做越少，团队能力批量复制，服务体系持续迭代升级",
          tags: { roi: "高", complexity: "中", target: ["小团队"] }
        }
      ]
    }
  ]
};
