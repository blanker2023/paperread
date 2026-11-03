window.NLOS_DATA = {
  issue: {
    date: "2026-11-03",
    number: 5,
    updatedAt: "2026-11-03T15:52:19Z",
    sourceCount: 1,
    fetched: 752,
    kept: 13,
    headline: "稀疏视角 CT 迎来先验驱动的高斯重建，相位恢复与生成先验同步推进。",
    note: "3 天窗口内 8 条候选全部已在第 2–4 期收录，为避免空期改用 7 天窗口补充检索（34 条候选、26 条未收录），按方向独立配额择优收录 13 篇（T01×1 / T04×3 / T06×3 / T08×2 / T09×2 / T10×2），跨方向 2 篇；T02/T03/T05/T07 无达标新增候选，按规则减条不掺水。",
    dailyIds: ["2610.39359", "2610.40046", "2610.38207", "2610.41531", "2611.00157", "2610.40187", "2610.41011", "2610.40166", "2610.37802", "2610.39340", "2610.38589", "2610.40393", "2610.37519"],
    headlineIds: ["2610.39359", "2610.37802", "2610.38207"],
    crossIds: ["2610.38207", "2610.41011"]
  },
  features: { dynamicTopics: true, shadowClassify: true, coldStart: true },
  topics: [
    { id: "T01", name: "非视域成像", en: "NON-LINE-OF-SIGHT", parent: "计算介质", order: 1, defWeight: 3, quota: 3, enabled: true, tagline: "看不见的拐角后面有什么", description: "NLOS、光锥变换、相量场与隐藏场景重建。", cadence: "日增 0–3 篇" },
    { id: "T03", name: "单光子与瞬态成像", en: "SINGLE-PHOTON & TRANSIENT", parent: "计算探测器", order: 2, defWeight: 3, quota: 3, enabled: true, tagline: "捕捉光子抵达的时间", description: "SPAD、TCSPC、瞬态光传输与光子高效成像。", cadence: "日增 0–3 篇" },
    { id: "T04", name: "神经场与逆问题重建", en: "NEURAL FIELDS & INVERSE PROBLEMS", parent: "计算处理", order: 3, defWeight: 3, quota: 3, enabled: true, tagline: "让表示学习与物理模型相遇", description: "神经场、3DGS、深度展开与扩散先验；必须命中成像任务锚词。", cadence: "日增 0–3 篇" },
    { id: "T02", name: "散射介质成像", en: "THROUGH SCATTERING", parent: "计算介质", order: 4, defWeight: 2, quota: 3, enabled: true, tagline: "穿过散射，重新看清", description: "散射介质、波前整形与抗散射重建。", cadence: "日增 0–3 篇" },
    { id: "T05", name: "高光谱重建", en: "HYPERSPECTRAL", parent: "计算处理", order: 5, defWeight: 2, quota: 3, enabled: true, tagline: "从光谱维度恢复更多细节", description: "高光谱采集、压缩感知与光谱重建。", cadence: "日增 0–3 篇" },
    { id: "T06", name: "相位恢复与叠层成像", en: "PHASE RETRIEVAL", parent: "计算处理", order: 6, defWeight: 2, quota: 3, enabled: true, tagline: "从强度里找回相位", description: "相位恢复、叠层衍射与相干成像。", cadence: "日增 0–3 篇" },
    { id: "T07", name: "光场与无透镜成像", en: "LIGHT FIELD & LENSLESS", parent: "计算介质", order: 7, defWeight: 2, quota: 3, enabled: true, tagline: "重新设计光与传感器", description: "光场、编码孔径与无透镜计算成像。", cadence: "日增 0–3 篇" },
    { id: "T08", name: "计算摄影", en: "COMPUTATIONAL PHOTOGRAPHY", parent: "计算处理", order: 8, defWeight: 1, quota: 3, enabled: true, tagline: "传感器之外的图像能力", description: "计算摄影、图像形成与新型视觉采集。", cadence: "日增 0–3 篇" },
    { id: "T09", name: "显微计算成像", en: "COMPUTATIONAL MICROSCOPY", parent: "计算探测器", order: 9, defWeight: 1, quota: 3, enabled: true, tagline: "在微观尺度拓展可见边界", description: "计算显微、超分辨与显微逆问题。", cadence: "日增 0–3 篇" },
    { id: "T10", name: "成像工具与数据集", en: "TOOLS & DATASETS", parent: "研究生态", order: 10, defWeight: 1, quota: 3, enabled: true, tagline: "让方法更容易复现", description: "仿真器、基准、数据集与开源研究工具。", cadence: "日增 0–3 篇" }
  ],
  sections: [
    { id: "core", name: "核心重建", en: "CORE RECONSTRUCTION", description: "新模型、新表示与重建质量的前沿推进" },
    { id: "physics", name: "物理与建模", en: "PHYSICS & MODELS", description: "光传输、逆问题与可解性边界" },
    { id: "efficient", name: "高效算法", en: "EFFICIENT METHODS", description: "更快的速度、更小的内存与更低采集成本" },
    { id: "system", name: "系统与采集", en: "SYSTEMS & CAPTURE", description: "真实光路、扫描系统与实验装置" },
    { id: "benchmark", name: "综述与基准", en: "REVIEWS & BENCHMARKS", description: "统一比较、研究脉络与可复现评价" },
    { id: "tools", name: "仿真与工具", en: "SIMULATION & TOOLS", description: "数据集、渲染器与开源研究工具" },
    { id: "transfer", name: "迁移与生态", en: "TRANSFER & ECOSYSTEM", description: "可迁移到 NLOS 的相邻方法与器件进展" }
  ],
  papers: [
    {
      id: "2610.22847", no: 1, tier: "A", section: "core", primaryTopic: "T01", topicTags: ["T01", "T03"], confidence: 0.91, score: 0.91, evidence: "mixed",
      title: "Measurement-Adaptive Light-Cone Transform for Robust Non-Line-of-Sight Imaging",
      titleZh: "测量自适应光锥变换：面向稳健 NLOS 成像",
      authors: ["Lianfang Wang", "Xueying Liu", "Junnan Dong", "Qinghua Zhang", "Jun Liu", "Yong Wang", "Yuping Duan"],
      venue: "arXiv · eess.IV", published: "2026-10-16", url: "https://arxiv.org/abs/2610.22847", pdf: "https://arxiv.org/pdf/2610.22847",
      tags: ["LCT", "物理引导", "低信号"], primaryClass: "eess.IV",
      summary: "提出 MALCT，在保留 LCT 频域高效反演结构的同时，引入测量条件权重与频率相关正则化。时空特征模块用于低信号重建，并评估时间响应展宽、采集时间下降和稀疏空间采样等条件。",
      why: "它不是另起一套黑箱网络，而是在可解释的 LCT 框架内做自适应增强，适合直接对照现有重建管线。"
    },
    {
      id: "2609.16017", no: 2, tier: "A", section: "core", primaryTopic: "T01", topicTags: ["T01", "T03"], confidence: 0.89, score: 0.89, evidence: "mixed",
      title: "Cascaded Non-Line-of-Sight Imaging",
      titleZh: "级联非视距成像：把高次反射变成新的虚拟视点",
      authors: ["Diego Royo", "María Peña", "Forrest B. Peterson", "Andreas Velten", "Julio Marco", "Diego Gutierrez"],
      venue: "ACM TOG · SIGGRAPH Asia 2026", published: "2026-09-03", url: "https://arxiv.org/abs/2609.16017", pdf: "https://arxiv.org/pdf/2609.16017", code: "https://graphics.unizar.es/projects/CascadedNLOS/", doi: "10.1145/3842503",
      tags: ["高次反射", "多拐角", "虚拟视点"], primaryClass: "cs.GR",
      summary: "利用传统方法忽略的四次、五次反射，在隐藏墙面上构造虚拟脉冲响应，从而级联第二个虚拟 NLOS 系统。仿真与真实原型展示了双拐角目标成像，也讨论了粗糙隐藏墙面带来的可见性限制。",
      why: "把高次光子从噪声变成信息来源，扩展了可成像场景与观察角度，是系统模型层面的明显推进。"
    },
    {
      id: "2606.21270", no: 3, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T01", "T03", "T04"], confidence: 0.87, score: 0.87, evidence: "real",
      title: "Non-line-of-sight imaging with arbitrary relay surface geometries via 3D Gaussian Transient Rendering",
      titleZh: "基于 3D 高斯瞬态渲染的任意中继面 NLOS 成像",
      authors: ["Yi Wang", "Ziyu Zhan", "Yuran Wang", "Hao Wang", "Qiang Liu", "Zuoqiang Shi", "Lingyun Qiu", "Xing Fu"],
      venue: "arXiv · physics.optics", published: "2026-06-19", url: "https://arxiv.org/abs/2606.21270", pdf: "https://arxiv.org/pdf/2606.21270",
      tags: ["3D Gaussian", "可微渲染", "任意中继面"], primaryClass: "physics.optics",
      summary: "用 3D 高斯表示隐藏场景，并耦合高效可微瞬态渲染模型，直接从测量瞬态端到端优化。方法不假设中继面几何，兼容共焦与非共焦配置，重点面向空间有限、稀疏采样和非平面中继区域。",
      why: "将 3D Gaussian 与瞬态光传输结合，直指真实部署中“中继墙不平整、采样不完整”的常见约束。"
    },
    {
      id: "2508.09655", no: 4, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T01", "T04"], confidence: 0.79, score: 0.79, evidence: "mixed",
      title: "Noise-adapted Neural Operator for Robust Non-Line-of-Sight Imaging",
      titleZh: "噪声自适应神经算子用于稳健 NLOS 成像",
      authors: ["Lianfang Wang", "Kuilin Qin", "Xueying Liu", "Huibin Chang", "Yong Wang", "Yuping Duan"],
      venue: "arXiv · cs.CV", published: "2025-08-13", url: "https://arxiv.org/abs/2508.09655", pdf: "https://arxiv.org/pdf/2508.09655",
      tags: ["神经算子", "算法展开", "噪声估计"], primaryClass: "cs.CV",
      summary: "先估计瞬态数据噪声，再以参数化神经算子逼近逆映射，并通过深度算法展开构建可解释的三维重建框架。全局与局部时空特征融合用于提升快速扫描和稀疏照明条件下的稳定性。",
      why: "噪声水平被显式纳入逆问题求解，而不是依赖固定网络去适应所有测量条件。"
    },
    {
      id: "2609.26846", no: 5, tier: "B", section: "physics", primaryTopic: "T01", topicTags: ["T01", "T04"], confidence: 0.68, score: 0.68, evidence: "mixed",
      title: "Reconstruction and Range Characterization for a Directional Confocal Non-Line-of-Sight Imaging Model",
      titleZh: "方向性共焦 NLOS 模型的重建与值域刻画",
      authors: ["Lingyun Qiu", "Zuoqiang Shi", "Jianyu Wang", "Shiwei Wu"],
      venue: "arXiv · math.NA", published: "2026-09-22", url: "https://arxiv.org/abs/2609.26846", pdf: "https://arxiv.org/pdf/2609.26846",
      tags: ["方向反照率", "Helmholtz", "逆问题"], primaryClass: "math.NA",
      summary: "研究共焦测量下方向反照率场的可恢复性，明确无散场构成全部歧义，并给出恢复 Helmholtz 无旋分量的显式 Fourier-sine 公式。算法使用 FFT 与 Stolt 插值，在模型、渲染和实测瞬态上验证。",
      why: "不仅提出算法，还回答了什么能被恢复、什么天然不可见，有助于判断实验结果的可靠性边界。"
    },
    {
      id: "2610.31271", no: 6, tier: "B", section: "physics", primaryTopic: "T01", topicTags: ["T01", "T04"], confidence: 0.64, score: 0.64, evidence: "sim",
      title: "Numerical reconstruction of polygonal obstacles by diffracted waves",
      titleZh: "利用衍射波数值重建多边形障碍物",
      authors: ["Xi Chen", "Kuangmiao Xiong", "Boxi Xu"],
      venue: "arXiv · math.NA", published: "2026-10-22", url: "https://arxiv.org/abs/2610.31271", pdf: "https://arxiv.org/pdf/2610.31271",
      tags: ["衍射", "逆散射", "阴影区"], primaryClass: "math.NA",
      summary: "从单脉冲波场中分离衍射信号，以到达时间恢复可见顶点，再利用振幅推断角方向与张角。方法可处理反射波无法到达接收器的阴影区域，并在多种多边形障碍物与加噪条件下验证。",
      why: "提供了一条区别于常规椭圆反演的逆散射路径，尤其适合关注遮挡边界与角点恢复的研究。"
    },
    {
      id: "2508.02003", no: 7, tier: "A", section: "efficient", primaryTopic: "T01", topicTags: ["T01", "T04"], confidence: 0.77, score: 0.77, evidence: "sim",
      title: "Fast and Memory-efficient Non-line-of-sight Imaging with Quasi-Fresnel Transform",
      titleZh: "基于准 Fresnel 变换的快速低内存 NLOS 成像",
      authors: ["Yijun Wei", "Jianyu Wang", "Leping Xiao", "Zuoqiang Shi", "Xing Fu", "Lingyun Qiu"],
      venue: "arXiv · cs.CV", published: "2025-08-04", url: "https://arxiv.org/abs/2508.02003", pdf: "https://arxiv.org/pdf/2508.02003",
      tags: ["Quasi-Fresnel", "低内存", "轻量设备"], primaryClass: "cs.CV",
      summary: "利用多数隐藏目标的二维特性，以二维函数表示场景，并通过准 Fresnel 变换建立测量与场景之间的直接反演。目标是降低三维体表示带来的计算与内存开销，为移动和嵌入式设备重建提供路径。",
      why: "从问题表示本身降低复杂度，而不是只优化实现，对资源受限部署很有参考价值。"
    },
    {
      id: "2607.04183", no: 8, tier: "B", section: "system", primaryTopic: "T01", topicTags: ["T01"], confidence: 0.61, score: 0.61, evidence: "real",
      title: "Non-Line-of-Sight imaging using raster scanning at NIR wavelength",
      titleZh: "近红外波段光栅扫描 NLOS 成像",
      authors: ["Mohammad Roueinfar", "Mahdi Salmanian"],
      venue: "ICEE · eess.IV", published: "2026-07-05", url: "https://arxiv.org/abs/2607.04183", pdf: "https://arxiv.org/pdf/2607.04183", doi: "10.1109/ICEE67339.2025.11213924",
      tags: ["近红外", "光栅扫描", "三次反射"], primaryClass: "eess.IV",
      summary: "采用近红外激光、云台光栅扫描与近红外相机构建三次反射成像系统，并对不同隐藏目标进行实验。结果以真实图像为参照，使用 MSE 与 RMSE 评价重建误差。",
      why: "装置链路清楚，适合用作非时间分辨 NLOS 实验系统与误差评价的对照。"
    },
    {
      id: "2603.09548", no: 9, tier: "A", section: "benchmark", primaryTopic: "T03", topicTags: ["T01", "T03"], confidence: 0.82, score: 0.82, evidence: "real",
      title: "A comprehensive study of time-of-flight non-line-of-sight imaging",
      titleZh: "飞行时间 NLOS 成像的统一比较研究",
      authors: ["Julio Marco", "Adrian Jarabo", "Ji Hyun Nam", "Alberto Tosi", "Diego Gutierrez", "Andreas Velten"],
      venue: "arXiv · cs.CV", published: "2026-03-10", url: "https://arxiv.org/abs/2603.09548", pdf: "https://arxiv.org/pdf/2603.09548",
      tags: ["统一模型", "基准", "Radon 变换"], primaryClass: "cs.CV",
      summary: "在统一前向模型与硬件条件下梳理多类 ToF NLOS 方法，联系 Radon 变换与相量场虚拟 LOS 模型，并在相同设备和相近光子计数下比较。研究重点落在分辨率、可见性和噪声敏感性的共同限制。",
      why: "适合作为阅读新算法前的基准坐标系，帮助区分方法差异与实验条件差异。"
    },
    {
      id: "2510.25660", no: 10, tier: "B", section: "tools", primaryTopic: "T03", topicTags: ["T01", "T03", "T04"], confidence: 0.71, score: 0.71, evidence: "sim",
      title: "mitransient: Transient light transport in Mitsuba 3",
      titleZh: "mitransient：Mitsuba 3 的瞬态光传输扩展",
      authors: ["Diego Royo", "Jorge Garcia-Pueyo", "Miguel Crespo", "Guillermo Enguita", "Óscar Pueyo-Ciutad", "Diego Bielsa"],
      venue: "arXiv · cs.GR", published: "2025-10-29", url: "https://arxiv.org/abs/2510.25660", pdf: "https://arxiv.org/pdf/2510.25660", code: "https://mitransient.readthedocs.io",
      tags: ["Mitsuba 3", "可微渲染", "开源工具"], primaryClass: "cs.GR",
      summary: "为 Mitsuba 3 增加时间维度，支持 CPU/GPU 瞬态模拟、偏振跟踪与瞬态可微渲染，并提供 NLOS 场景和采集噪声模拟工具。用于在缺少昂贵硬件时快速原型化瞬态成像系统。",
      why: "能直接补齐仿真验证与可微渲染实验工具链，降低新想法的验证门槛。"
    },
    {
      id: "2604.00225", no: 11, tier: "C", section: "transfer", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.49, score: 0.49, evidence: "mixed",
      title: "Pupil Design for Computational Wavefront Estimation",
      titleZh: "面向计算波前估计的光瞳设计",
      authors: ["Ali Almuallem", "Nicholas Chimitt", "Bole Ma", "Qi Guo", "Stanley H. Chan"],
      venue: "arXiv · eess.IV", published: "2026-03-31", url: "https://arxiv.org/abs/2604.00225", pdf: "https://arxiv.org/pdf/2604.00225",
      tags: ["光瞳设计", "波前估计", "非对称性"], primaryClass: "eess.IV",
      summary: "提出定量非对称指标指导光瞳设计，研究非对称性与单次强度测量波前可恢复性的关系，并分析通光量与噪声表现之间的权衡。结论由大规模仿真与光学实验共同支持。",
      why: "虽非直接 NLOS 方法，其波前编码与可恢复性分析可迁移到采集端联合设计。"
    },
    {
      id: "2602.00633", no: 12, tier: "C", section: "transfer", primaryTopic: "T03", topicTags: ["T01", "T03"], confidence: 0.45, score: 0.45, evidence: "real",
      title: "Near-lossless method for generating thermal photon-bunched light",
      titleZh: "近无损耗产生热光子聚束光的方法",
      authors: ["Xi Jie Yeo", "Darren Ming Zhi Koh", "Justin Yu Xiang Peh", "Christian Kurtsiefer", "Peng Kian Tan"],
      venue: "arXiv · quant-ph", published: "2026-01-31", url: "https://arxiv.org/abs/2602.00633", pdf: "https://arxiv.org/pdf/2602.00633",
      tags: ["光子聚束", "时间相关", "量子光源"], primaryClass: "quant-ph",
      summary: "面向利用时间相关的测距、同步与 NLOS 成像，展示一种低损耗光子聚束生成方法，试图解决既有光源相干时间过短或亮度不足的问题，为相关测量提供新的光源选择。",
      why: "属于光源侧储备进展，可观察其是否能支撑新的被动或相关测量 NLOS 方案。"
    },
    {
      id: "2611.02658", no: 13, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "OctreeSplat: Hierarchical Octree-Guided Feed-Forward Gaussian Splatting",
      titleZh: "OctreeSplat：八叉树引导的层级前馈高斯泼溅",
      authors: ["Yibin Zhao", "Yihan Pan", "Wenli Yang", "Jun Nan", "Jianjun Yi"],
      venue: "arXiv · cs.CV", published: "2026-11-02", url: "https://arxiv.org/abs/2611.02658", pdf: "https://arxiv.org/pdf/2611.02658",
      tags: ["3DGS", "前馈重建", "八叉树"], primaryClass: "cs.CV",
      summary: "提出 OctreeSplat，一种层级八叉树引导的前馈 3D 高斯泼溅方法。从冻结的视觉基础模型提取多视图特征与几何先验，构建层级八叉树并预测致密化分数，使高斯基元按局部复杂度以空间可变密度分配；随机实体体渲染改进深度监督并支持表面重建，可选测试时优化模块在相机参数可用时提升一致性。训练仅更新 7600 万新增参数、需 35 GPU 小时，在 Replica、TUM、Tanks and Temples、DTU 上以更少基元取得有竞争力的视图合成与表面重建质量。",
      why: "前馈 3DGS 的关键瓶颈是基元分配与场景复杂度不匹配，八叉树引导的按需致密化给出了低成本解法，对重建效率敏感的成像管线有直接参考价值。"
    },
    {
      id: "2611.02044", no: 14, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "mixed",
      title: "Unified Loss-Aware Density Control for 3D Gaussian Splatting",
      titleZh: "面向 3D 高斯泼溅的统一损失感知密度控制",
      authors: ["Tae-Young Kim", "Jiwoo Chung", "Jae-Pil Heo"],
      venue: "arXiv · cs.CV", published: "2026-11-01", url: "https://arxiv.org/abs/2611.02044", pdf: "https://arxiv.org/pdf/2611.02044",
      tags: ["3DGS", "密度控制", "损失感知"], primaryClass: "cs.CV",
      summary: "将 3DGS 的自适应密度控制重新表述为一系列局部损失下降决策：用基于 Taylor 展开的逐高斯代理量预测分裂、克隆与不透明度衰减三种操作对目标函数的改变。在归一化位置-尺度联合空间扩展二阶分裂；把克隆建模为代理最小化问题并赋予子高斯有原则的不透明度；以选择性软衰减替代全局不透明度重置。标准 3DGS 基准上以相当或更少的基元预算获得更好的渲染质量。",
      why: "把 3DGS 里长期靠启发式的密度控制变成可量化的损失决策，方法干净且即插即用，适合作为改进现有重建管线的直接参考。"
    },
    {
      id: "2611.00870", no: 15, tier: "B", section: "benchmark", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "A Reproducible Reconstruction and Evaluation Framework for Photorealistic Lunar Analog Scene Reconstruction Toward Digital Twins",
      titleZh: "面向数字孪生的月面模拟场景逼真重建与可复现评估框架",
      authors: ["Antar Mazumder", "Ryan Hartzell", "Luke Boyd", "Alexander Robinson", "Neha Sharma", "Chance Carnival", "Frances Zhu"],
      venue: "arXiv · cs.RO", published: "2026-10-31", url: "https://arxiv.org/abs/2611.00870", pdf: "https://arxiv.org/pdf/2611.00870", code: "https://rose-lab-admin.github.io/rose-lunar-dt-rec",
      tags: ["3DGS 评估", "数字孪生", "覆盖率指标"], primaryClass: "cs.RO",
      summary: "提出一套以物理真值为参照的重建与评估管线，定量衡量人控与漫游车桅杆相机单目输入在月面行进效应（运动模糊、月尘霾、轨迹偏差、稀疏视角）下的逼真重建精度。在三个月面模拟场景上基准测试六种 3DGS 变体，发现测试集新视图合成指标并不成比例地转化为数字孪生重建质量，轨迹偏差与几何覆盖起关键作用；并提出基于 COLMAP 位姿与点云结构的覆盖率评分 Sc，作为无参考条件下的结构保真度启发指标。",
      why: "提醒读者：3DGS 训练指标高不等于重建结果可信。这套评估方法论对任何依赖神经场重建做下游测量的成像研究都有警示意义。"
    },
    {
      id: "2611.01018", no: 16, tier: "C", section: "physics", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.52, score: 0.52, evidence: "mixed",
      title: "Robust Pixel-wise Digital Image Correlation under Large Motions and Illumination Variations via a Global-to-Local Hybrid Neural Field",
      titleZh: "全局到局部混合神经场：大位移与光照变化下的鲁棒逐像素数字图像相关",
      authors: ["Xianglong Guo", "Jianyang Li"],
      venue: "arXiv · cs.CV", published: "2026-10-31", url: "https://arxiv.org/abs/2611.01018", pdf: "https://arxiv.org/pdf/2611.01018",
      tags: ["神经场", "数字图像相关", "光照鲁棒"], primaryClass: "cs.CV",
      summary: "把数字图像相关（DIC）拆成两阶段：第一阶段通过粗旋转搜索、相位相关与掩膜细化估计主导的面内刚性变换，为大平移与大旋转提供可靠初始化；第二阶段用 KAN 与 MLP 的混合网络表示残余位移场，并以有效重叠、光照鲁棒的结构损失优化，局部灰度模型显式容纳乘性与加性亮度变化。仿真与真实实验在噪声、非均匀变形、大旋转、光照变化与成像退化条件下均能稳定恢复位移。",
      why: "它把神经场用在位移场表示而不是场景重建上，方向与主流 NeRF / 3DGS 路线不同；其中「先刚性对齐再残差细化」的两阶段初始化与显式灰度扰动建模，对任何测量型逆问题的稳定性设计都有借鉴价值。"
    },
    {
      id: "2611.02149", no: 17, tier: "C", section: "system", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Scan-less Hyperspectral Polarimetric Imaging Using Dual-Comb Single-Pixel Imaging",
      titleZh: "双光梳单像素成像：无扫描的高光谱偏振成像",
      authors: ["Shogo Tanimura", "Eiji Hase", "Hidenori Koresawa", "Kyuki Shibuya", "Yu Tokizane", "Akifumi Asahara", "Kaoru Minoshima", "Takeshi Yasui"],
      venue: "arXiv · physics.optics", published: "2026-11-01", url: "https://arxiv.org/abs/2611.02149", pdf: "https://arxiv.org/pdf/2611.02149",
      tags: ["双光梳", "单像素成像", "偏振", "无扫描"], primaryClass: "physics.optics",
      summary: "把双光梳光谱偏振测量（DCSP）与结构光照明、单像素探测结合，提出 DCSP-SPI 框架：无需相机即可无扫描地同时获取高光谱偏振图像。利用双光梳干涉的固有幅度与相位灵敏度，重建振幅比 ψ 与相位差 δ 的频谱分辨图像，并通过多入射偏振态扩展到完整 Jones 矩阵元素的高光谱重建。实验用双折射分辨率靶与 Fabry-Pérot 标准具验证。",
      why: "把「无扫描 + 高光谱 + 偏振」三项能力在同一单像素平台上打通，是对光谱偏振成像采集链路的一次系统级整合，适合关注新型采集方式的读者。"
    },
    {
      id: "2611.02549", no: 18, tier: "C", section: "physics", primaryTopic: "T02", topicTags: ["T02", "T07"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Deterministic and dynamic synthesis of optical skyrmions through an ultrathin multimode fibre",
      titleZh: "经超薄多模光纤确定性动态合成光学斯格明子",
      authors: ["R. E. Bautista Gonzalez", "R. Mouthaan", "A. McIntosh", "K. Dholakia"],
      venue: "arXiv · physics.optics", published: "2026-11-02", url: "https://arxiv.org/abs/2611.02549", pdf: "https://arxiv.org/pdf/2611.02549",
      tags: ["传输矩阵", "多模光纤", "相位恢复", "拓扑光场"], primaryClass: "physics.optics",
      summary: "在强耦合多模光纤中，结合矢量传输矩阵控制与相位恢复优化框架，在光纤出射端确定性生成并动态重构任意光学斯格明子（Néel、Bloch、反斯格明子、高阶与双半子）。通过偏振分辨 Stokes 测量与斯格明子数定量验证拓扑性质，波前重编程支持偏振纹理的可逆切换。",
      why: "它在复杂散射介质里用「传输矩阵 + 相位恢复」实现矢量场的确定性合成，把散射从障碍变成可控工具，对散射成像与光场调控是双重启发。"
    },
    {
      id: "2611.01384", no: 19, tier: "C", section: "physics", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Benign population landscapes do not transfer to empirical risk minimization in nonsmooth optimization",
      titleZh: "非光滑优化中良性总体景观未必迁移到经验风险最小化",
      authors: ["Penghao Wang", "Mateo Díaz", "Liwei Jiang"],
      venue: "arXiv · math.OC", published: "2026-11-01", url: "https://arxiv.org/abs/2611.01384", pdf: "https://arxiv.org/pdf/2611.01384",
      tags: ["相位恢复", "非凸优化", "鞍点", "理论"], primaryClass: "math.OC",
      summary: "研究非光滑优化中「良性景观」从总体目标到经验目标的迁移问题。以高斯测量下的稳健相位恢复为例证明：总体目标是良性的，但经验目标却以不随样本量消失的概率存在尖锐伪局部极小，这一渐近概率下界与维度无关，说明常用的两步迁移策略在非光滑场景并不成立。",
      why: "它从理论上解释了稳健相位恢复为何会卡在伪局部极小，对理解相位恢复算法收敛行为、避免把总体性质误套到有限样本有直接价值。"
    },
    {
      id: "2611.03322", no: 20, tier: "C", section: "benchmark", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "View optimization in Computed Tomography",
      titleZh: "计算机断层成像的视角优化",
      authors: ["Seemeen Karimi", "Christopher McGuire"],
      venue: "arXiv · eess.IV", published: "2026-11-02", url: "https://arxiv.org/abs/2611.03322", pdf: "https://arxiv.org/pdf/2611.03322",
      tags: ["稀疏视角", "CT", "视角选择", "性能预测"], primaryClass: "eess.IV",
      summary: "针对少视角 CT 的数据欠采样问题，提出基于离散前向模型矩阵分解、并融入预期目标梯度信息的对象感知性能预测框架，为候选视角集给出定量评分，支撑视角选择推荐。方法可在采集前（先验）或采集后（自适应）阶段确定下一个最佳视角，用 5 视角与 15 视角仿真 CT 数据验证。",
      why: "视角选择是少视角 CT 从「看得见」到「看得准」的关键，这套可先验也可自适应的评分框架，对任何稀疏采集逆问题都有方法论参考价值。"
    },
    {
      id: "2610.39359", no: 21, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.88, score: 0.88, evidence: "mixed",
      title: "P^2-Gaussian: Prior-Driven and Projection-Guided Gaussian Splatting for Sparse-View Cone-Beam CT Reconstruction",
      titleZh: "P²-Gaussian：先验驱动与投影引导的高斯溅射稀疏视角 CBCT 重建",
      authors: ["Jinqiu Xia", "Jianhui Ma", "Bin Ouyang", "Xiaoyan Huang", "Yuan Xu", "Zun Piao"],
      venue: "arXiv · physics.med-ph", published: "2026-10-29", url: "https://arxiv.org/abs/2610.39359", pdf: "https://arxiv.org/pdf/2610.39359",
      tags: ["稀疏视角 CT", "高斯溅射", "整流流先验"], primaryClass: "physics.med-ph",
      summary: "针对稀疏视角锥束 CT 的角度欠采样病态问题，先用潜空间整流流模型 Sparse2Prior 把条纹伪影严重的 FDK 体数据恢复为解剖先验（约 5 秒），再按组织自适应方式初始化高斯基元，使需优化的基元比随机采样少 62%–65%。优化时按旋转顺序激活测量投影之间中间角度的虚拟投影，同时保持实测投影在目标函数中占主导。在 5/10/20 个测量视角下 PSNR 与 SSIM 均为最优，较基于优化的高斯基线分别提升 5.98/4.25/2.49 dB，重建加速 2.6–3.0 倍。",
      why: "把学到的解剖先验与测量约束的高斯优化显式耦合，正面解决了两件事：3DGS 类方法从伪影体数据初始化，以及视角不足导致高斯退化成针状。对任何稀疏角度逆问题都可直接借鉴。"
    },
    {
      id: "2610.40046", no: 22, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "mixed",
      title: "EPC-RawDC: Equivariant Physics Constrained 3D Diffusion with Raw Data Consistency for CBCT to CT Image Synthesis",
      titleZh: "EPC-RawDC：等变物理约束三维扩散与原始数据一致性，用于 CBCT 到 CT 合成",
      authors: ["Alzahra Altalib", "Chunhui Li", "Alessandro Perelli"],
      venue: "arXiv · cs.CV", published: "2026-10-29", url: "https://arxiv.org/abs/2610.40046", pdf: "https://arxiv.org/pdf/2610.40046",
      tags: ["CBCT→CT", "物理约束扩散", "原始数据一致性"], primaryClass: "cs.CV",
      summary: "CBCT 的散射、噪声、重建伪影与 HU 不准限制了定量使用，而现有扩散式 CBCT 到 CT 合成多为图像驱动、几乎不用采集物理。作者提出条件三维潜扩散框架，从同一扫描仪前向模型导出两项约束：几何等变投影约束利用 CBCT 前向算子的旋转等变性，用相应变换的参考投影监督合成 CT；原始数据一致性则用该次采集的含噪投影做逐扫描监督。两个扫描仪几何不同的临床队列上 SSIM 均达 0.97，PSNR 较 DDPM 分别提升 2.66 dB 与 2.10 dB，MAE 降低 19%–20%，投影一致性与等变误差分别下降 55.0% 与 41.4%。",
      why: "示范了把采集物理写进生成模型、再用真实原始投影逐例约束的范式；跨模态合成与重建里这套双约束设计迁移成本很低。"
    },
    {
      id: "2610.38207", no: 23, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04", "T06"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Progressive Coupling Method for Diffusion Posterior Sampling in Ptychography",
      titleZh: "渐进耦合后验采样：降低叠层衍射成像对扫描重叠的依赖",
      authors: ["Yihan Qiu", "Mingtao Huang", "Tianyuan Li", "Shudong Li", "Yuan Shen"],
      venue: "arXiv · cs.LG", published: "2026-10-28", url: "https://arxiv.org/abs/2610.38207", pdf: "https://arxiv.org/pdf/2610.38207",
      tags: ["叠层衍射", "扩散后验采样", "低重叠扫描"], primaryClass: "cs.LG",
      summary: "叠层成像依赖扫描重叠带来的冗余约束，降低重叠能提升采集效率却削弱物理约束。作者提出渐进耦合后验采样（PCPS）：重建初期不确定性高，允许更宽的解空间探索；随着重建逐渐收敛，再提高扩散引导的强度以加强一致性。在多种重叠率的真实 X 射线叠层数据上，PCPS 稳定优于传统迭代方法与现有扩散后验采样器，低重叠条件下优势最明显。",
      why: "回答了一个实际难题：测量冗余不足时，生成先验该以多强的力度介入。这种按收敛进度调度先验强度的机制，对稀疏采样相位恢复同样适用。"
    },
    {
      id: "2610.41531", no: 24, tier: "C", section: "physics", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "The Generalized Twin Image: Understanding Regularized Phase Retrieval",
      titleZh: "广义孪生像：解释正则化相位恢复为何时灵时不灵",
      authors: ["Zhiyuan Hu", "Michael Unser", "Jonathan Dong"],
      venue: "arXiv · physics.optics", published: "2026-10-30", url: "https://arxiv.org/abs/2610.41531", pdf: "https://arxiv.org/pdf/2610.41531",
      tags: ["孪生像", "正则化理论", "全变差比值"], primaryClass: "physics.optics",
      summary: "把经典傅里叶相位恢复中的孪生像模糊推广到任意可逆感知算子，用以解释图像先验在不同模态下效果差异巨大的原因。该模糊在欠采样下仍然精确，在过采样编码傅里叶测量下同样成立；由此得到判断正则化是否有效的简单准则：先验应更偏好真值而非其广义孪生像。作者提出全变差比值来度量这种偏好，并对结构化随机相位恢复模型给出闭式估计；用预训练去噪器的实验表明，该比值可预测不同感知模型下的正则化重建表现。",
      why: "少见的「先验为何有效」理论文章。给出了在特定采样算子下判断某类正则化值不值得投入的判据，不必全靠试错。"
    },
    {
      id: "2611.00157", no: 25, tier: "C", section: "efficient", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "FlowFPR: Flow Matching Prior for Oversampled Fourier Phase Retrieval",
      titleZh: "FlowFPR：过采样傅里叶相位恢复的流匹配先验",
      authors: ["Li Jiatai", "Cao Wenfei", "Chen Yang"],
      venue: "arXiv · eess.IV", published: "2026-10-30", url: "https://arxiv.org/abs/2611.00157", pdf: "https://arxiv.org/pdf/2611.00157",
      tags: ["流匹配先验", "傅里叶相位恢复", "自适应融合"], primaryClass: "eess.IV",
      summary: "将预训练流匹配先验与松弛平均交替反射（RAAR）结合用于过采样傅里叶相位恢复：每个外迭代用一次时间相关的流预测得到干净图像估计，再做测量一致性校正，融合两个候选后重建下一路径状态，全过程无需把测量误差反传到流网络。针对固定融合权重与固定内层深度造成的校正不足或过度，引入基于残差改善的自适应融合，以及结合早停与最优候选保留的内层受控搜索。自然人脸图像实验表明，联合变体在两个非零噪声水平下平均质量最佳，同硬件端到端耗时低于扩散类基线。",
      why: "用单步流预测替代多次扩散迭代，把生成先验的算力成本压了下来，这是相位恢复走向实用的关键一步；自适应融合与内层搜索的工程细节也值得复用。"
    },
    {
      id: "2610.40187", no: 26, tier: "C", section: "tools", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Model-Based Retrieval of Four Years of JWST/NIRCam Wavefronts",
      titleZh: "camino：四年 JWST/NIRCam 波前的开源模型化反演",
      authors: ["Shrishmoy Ray", "Benjamin Pope", "Louis Desdoigts", "Hayden Greer", "Milo Langker", "Peter Tuthill", "Marshall Perrin", "Anand Sivaramakrishnan", "Alexandra Greenbaum", "Laurent Pueyo", "Max Charles"],
      venue: "arXiv · astro-ph.IM", published: "2026-10-29", url: "https://arxiv.org/abs/2610.40187", pdf: "https://arxiv.org/pdf/2610.40187",
      tags: ["波前反演", "可微光学", "JWST"], primaryClass: "astro-ph.IM",
      summary: "JWST 每隔数天用 NIRCam 拍一对离焦参考星图像，再由闭源相位恢复软件推断波前。作者发布开源算法 camino：在 JAX 上用可微菲涅耳光学库 dLUX 建模 NIRCam，采用以全部历史波前传感数据为条件的正则化最大似然推断。离焦数据拟合的约化卡方从 60–65 降到 12–13，并重建了自科学运行开始至 2026 年初的波前历史；结果可与 STScI 现有算法并行比对，同时提供 NIRCam 成像模拟器。",
      why: "以开源替代闭源管线并显著改善拟合残差，是「可微物理前向模型 + 正则化最大似然」在真实大口径系统上的工程化样板，也为不依赖专门参考星的预测性定标铺路。"
    },
    {
      id: "2610.41011", no: 27, tier: "C", section: "core", primaryTopic: "T08", topicTags: ["T04", "T08"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Prior-Guided Single-Exposure HDR Novel View Synthesis via Base-Gain Representation",
      titleZh: "PriorGS：基底-增益表示下的先验引导单曝光 HDR 新视角合成",
      authors: ["Armin Shafiee Sarvestani", "Sheyang Tang", "Jialu Xu", "Zhou Wang"],
      venue: "arXiv · cs.CV", published: "2026-10-29", url: "https://arxiv.org/abs/2610.41011", pdf: "https://arxiv.org/pdf/2610.41011",
      tags: ["HDR", "新视角合成", "基底-增益表示"], primaryClass: "cs.CV",
      summary: "单曝光 HDR 新视角合成只有 LDR 视图作为直接监督，还需估计相机响应函数以便重新曝光，两者都欠约束。PriorGS 在 3D 高斯溅射框架内做两件事：用二维单曝光 HDR 重建方法生成伪 HDR 监督，并通过闭环重建锚定输入 LDR 视图；用可学习先验正则化 CRF 建模，保证单调性并鼓励合理响应曲线。针对独立生成的伪 HDR 目标跨视角不一致的问题，提出把 HDR 辐亮度分解为 LDR 基底与三维增益场的表示，提升鲁棒性并支持三维 HDR 外观编辑。",
      why: "单曝光 HDR 与 NVS 的组合是手机与车载影像的刚需。把伪标签的跨视角不一致当作表示设计问题（基底-增益分解）来解决，比单纯加正则更对症。"
    },
    {
      id: "2610.40166", no: 28, tier: "C", section: "transfer", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "EventSeeColor: Learning to Reconstruct Color from Monochrome Events",
      titleZh: "EventSeeColor：从单色事件流重建彩色图像",
      authors: ["Chuanzhi Xu", "Langyi Chen", "Haoxian Zhou", "Zelin Zhang", "Haodong Chen", "Qiang Qu", "Xiaoming Chen", "Weidong Cai"],
      venue: "arXiv · cs.CV", published: "2026-10-29", url: "https://arxiv.org/abs/2610.40166", pdf: "https://arxiv.org/pdf/2610.40166",
      tags: ["事件相机", "扩散上色", "彩色重建"], primaryClass: "cs.CV",
      summary: "事件相机擅长在极端光照下记录亮度变化，但传统事件重建只输出灰度，无法区分强度相近却颜色不同的表面。作者指出单色事件的触发模式仍隐含反射率、照明与传感器光谱响应的线索，据此提出 EventSeeColor：用事件重建的灰度图与对齐事件共同引导扩散上色器，灰度提供的语义上下文支撑颜色推断，区域均衡的色度监督与局部 RGB 精修改善色彩分布、亮度与纹理。在两个真实事件数据集的综合评测中，结构相似度、学习感知指标与彩色区域色差均优于外部方法。",
      why: "事件相机「有结构、缺颜色」是固有短板。用扩散上色器补色并把色度监督做成区域均衡，是低成本提升事件成像可用性的务实做法。"
    },
    {
      id: "2610.37802", no: 29, tier: "A", section: "core", primaryTopic: "T09", topicTags: ["T09"], confidence: 0.76, score: 0.76, evidence: "mixed",
      title: "Flow Matching for Fluctuation-Based Fluorescence Super-Resolution",
      titleZh: "流匹配驱动的荧光涨落超分辨重建",
      authors: ["Alberto Cozzani", "Giacomo Meanti", "Laure Blanc-Féraud", "Luca Calatroni"],
      venue: "arXiv · eess.IV", published: "2026-10-27", url: "https://arxiv.org/abs/2610.37802", pdf: "https://arxiv.org/pdf/2610.37802",
      tags: ["涨落超分辨", "流匹配", "双泊松模型"], primaryClass: "eess.IV",
      summary: "涨落型超分辨适配常规采集，利用荧光团在帧间的独立随机涨落，但多数方法缺少显式采集模型、只给相对强度，限制定量分析。作者把模型驱动与生成式方法结合：用流匹配学习采集数据的分布，配合计入闪烁、模糊、欠采样与噪声的双泊松前向模型；交替执行流匹配建模，以及以观测与模拟分布间 KL 散度为目标、用正则化近端梯度联合估计样本与背景。仿真与真实 Argolight 数据上可分辨间距 120 nm 的线条，优于 SACD 与 eSRRF。",
      why: "给涨落超分辨补上了显式前向模型与绝对强度估计，结果可用于定量分析。生成分布匹配加物理前向模型的组合，对低光子显微重建是通用配方。"
    },
    {
      id: "2610.39340", no: 30, tier: "B", section: "system", primaryTopic: "T09", topicTags: ["T09"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Focal-Plane Extreme Adaptive Optics for Deep Super Resolution Imaging and Nanolithography",
      titleZh: "焦面极端自适应光学：深层超分辨成像与纳米光刻",
      authors: ["Jinxin Liu", "Jiahao Niu", "Runxin Zeng", "Kaining Yang", "Ziyu Li", "Xiaodong Guan", "Jing Ren", "Kebin Shi", "Yue Wang", "Shan Zhao", "Yujie Sun", "He Sun"],
      venue: "arXiv · physics.optics", published: "2026-10-29", url: "https://arxiv.org/abs/2610.39340", pdf: "https://arxiv.org/pdf/2610.39340",
      tags: ["自适应光学", "焦面复场", "SMLM/STED"], primaryClass: "physics.optics",
      summary: "提出焦面极端自适应光学（FP-ExAO）：不再只做相位共轭补偿，而是直接探测并控制焦面复场，从而涵盖整个光路累积的像差。用状态空间形式把变形镜指令直接映射到焦场，避免逐面傅里叶光学建模；配合信息论最优探测与闭式控制实现快速场估计与校正，级联变形镜可同时处理耦合的相位-振幅与空间变化像差。三维单分子定位显微中实现脑组织 160 μm、肾组织 60 μm 以上深度成像，在 75 μm×75 μm 校正场内保持约 18 nm 定位精度，视场扩大 16 倍、校正速度提升十倍以上；STED 光刻中把 160 μm 深度处最小线宽从 251.1 nm 降到 88.8 nm。",
      why: "把自适应光学的控制目标从瞳面相位搬到焦面复场，并用状态空间模型绕开繁重的逐面建模。深层组织成像与激光直写都拿到了硬指标级的提升。"
    },
    {
      id: "2610.38589", no: 31, tier: "C", section: "tools", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "GRAVITY-RESOLVE: A comprehensive image reconstruction tool for Galactic Center observations with GRAVITY",
      titleZh: "GRAVITY-RESOLVE：银心观测的综合图像重建工具",
      authors: ["K. Abd El Dayem", "N. Aimar", "P. Amaro-Seoane", "B. Aytaç", "A. Berdeu", "J.-P. Berger", "G. Bourdarot", "W. Brandner", "Y. Cao", "S. Correia", "R. Davies", "D. Defrère", "A. Drescher", "F. Eisenhauer", "T. A. Enßlin"],
      venue: "arXiv · astro-ph.GA", published: "2026-10-28", url: "https://arxiv.org/abs/2610.38589", pdf: "https://arxiv.org/pdf/2610.38589",
      tags: ["干涉成像", "重建工具", "银心"], primaryClass: "astro-ph.GA",
      summary: "面向 VLTI/GRAVITY 光束组合器修订并发展专用图像重建代码 G^R，目标是提高极限星等、缩短运行时间，并支持天区上多个分离数据集的联合重建。作者用 GRAVITY+ 微光模式的新数据重建可见度相位与振幅，给出首张由这些量得到的 GRAVITY 图像；把 2025 年的九个独立数据集联合重建为一幅约 3390 AU×3390 AU（409.6 mas×409.6 mas）的近红外拼接图。注入测试给出视场中心 25 mas 半径内极限星等约 m_K≈20.0，并报告两颗新发现的暗星 S303 与 S304，计算耗时至少降低约 10 倍。",
      why: "干涉成像的重建工具长期是小圈子专用代码，这篇同时推进极限星等、运行时间与多指向拼接，是「工具即能力」的典型案例，对稀疏傅里叶采样重建有方法论参考。"
    },
    {
      id: "2610.40393", no: 32, tier: "C", section: "benchmark", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Quantum Computing through Computational Imaging: Representations, Measurement, and Inference",
      titleZh: "从计算成像看量子计算：表示、测量与推断",
      authors: ["George Kourousias", "Sergio Carrato", "Roberto Pugliese", "Panagiotis Dimitrakis", "Alberto Carini"],
      venue: "arXiv · quant-ph", published: "2026-10-29", url: "https://arxiv.org/abs/2610.40393", pdf: "https://arxiv.org/pdf/2610.40393",
      tags: ["量子表示", "测量与推断", "教程"], primaryClass: "quant-ph",
      summary: "一篇面向计算成像与工程读者的阐释文章：成像模型与量子态之间的代数对应并不等于计算方法，输入访问方式、测量与解码决定了能返回什么。作者给出四组区分——输入取值的振幅编码区别于完整候选标记的编码，振幅存储不等于全场读出；复场干涉引出未知相位推断，互补测量能消解局部 Fisher 信息检测不到的模糊；把联合振幅重塑为矩阵可把奇异值分解与纯态纠缠联系起来，并区分 Schmidt 秩与可高效经典模拟的条件。以四像素分割为例把目标写成代价算子与采样电路，QAOA 单层把平均能量从 1.675 降到 0.686，却使非最优标记的概率（0.484）高于最优（0.365）。",
      why: "做计算成像的人理解「量子表示能换来什么、又受什么限制」的低门槛入口。四像素例子直接暴露了采样型量子优化在最优性上的隐患，值得引以为戒。"
    },
    {
      id: "2610.37519", no: 33, tier: "C", section: "transfer", primaryTopic: "T01", topicTags: ["T01"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Leveraging Distributed Sensing and Hyperdimensional Computing for Non-Line-of-Sight Passive Object Sensing",
      titleZh: "分布式感知与超维计算驱动的非视域被动目标感知",
      authors: ["Placido Mursia", "Marco Rossanese", "Francesco Devoti", "Adrian Lendinez Ibanez", "Lanfranco Zanzi", "Xi Li", "Xavier Costa-Perez"],
      venue: "arXiv · cs.RO", published: "2026-10-27", url: "https://arxiv.org/abs/2610.37519", pdf: "https://arxiv.org/pdf/2610.37519",
      tags: ["非视域感知", "超维计算", "ISAC"], primaryClass: "cs.RO",
      summary: "智慧工厂中人等被动目标可能处在机器人视场外并造成安全风险，而 LiDAR、雷达、相机都受视距与遮挡限制。作者提出仅依赖通信基础设施分布式信道测量的视场外被动实体感知框架：把信道测量嵌入高维表示（超维计算），在不显式重建信道的前提下做风险感知分类。基于商用射线追踪的数值仿真与 ROS 场景验证显示，严重遮挡下分类准确率可达 89%，计算复杂度保持较低，并改善了路径规划安全性。",
      why: "提供了一条不靠光学、而靠通信信道与分布式感知的非视域路线，与光学 NLOS 互补。超维计算的轻量嵌入也适合边缘端实时部署。"
    }
  ],
  archive: [
    { date: "2026-11-03", number: 5, count: 13, highlights: "6 个方向 · 跨方向 2 篇 · 稀疏视角 CBCT / 荧光涨落超分辨 / 叠层衍射扩散采样", current: true,
      dailyIds: ["2610.39359", "2610.40046", "2610.38207", "2610.41531", "2611.00157", "2610.40187", "2610.41011", "2610.40166", "2610.37802", "2610.39340", "2610.38589", "2610.40393", "2610.37519"], headlineIds: ["2610.39359", "2610.37802", "2610.38207"] },
    { date: "2026-11-03", number: 4, count: 4, highlights: "4 个方向 · 跨方向 0 篇 · 双光梳偏振 / 斯格明子 / 相位恢复理论 / CT 视角优化", current: false,
      dailyIds: ["2611.02149", "2611.02549", "2611.01384", "2611.03322"], headlineIds: ["2611.02149", "2611.02549", "2611.01384"] },
    { date: "2026-11-03", number: 3, count: 1, highlights: "1 个方向 · 跨方向 0 篇 · 神经场 DIC 鲁棒位移测量", current: false,
      dailyIds: ["2611.01018"], headlineIds: ["2611.01018"] },
    { date: "2026-11-03", number: 2, count: 3, highlights: "1 个方向 · 跨方向 0 篇 · OctreeSplat / 损失感知密度控制 / 月面数字孪生评估", current: false,
      dailyIds: ["2611.02658", "2611.02044", "2611.00870"], headlineIds: ["2611.02658", "2611.02044", "2611.00870"] },
    { date: "2026-11-03", number: 1, count: 9, highlights: "3 个方向 · 跨方向 2 篇 · MALCT / 瞬态渲染 / 神经算子", current: false, rebuilt: true,
      dailyIds: ["2610.22847", "2609.16017", "2606.21270", "2508.09655", "2609.26846", "2610.31271", "2508.02003", "2607.04183", "2603.09548"],
      headlineIds: ["2610.22847", "2606.21270", "2508.09655"] },
    { date: "2026-11-02", number: 0, count: 0, highlights: "首版站点尚未开始归档", empty: true }
  ],
  watchlist: [
    { name: "Andreas Velten", type: "作者", focus: "ToF NLOS · 光传输", weight: 1.0 },
    { name: "Lingyun Qiu", type: "作者", focus: "逆问题 · 快速重建", weight: 1.0 },
    { name: "Zuoqiang Shi", type: "作者", focus: "计算数学 · 成像", weight: 0.9 },
    { name: "Diego Gutierrez", type: "课题组", focus: "瞬态渲染 · 计算成像", weight: 0.9 },
    { name: "Xing Fu", type: "作者", focus: "NLOS · 计算摄影", weight: 0.9 }
  ],
  deadlines: [
    { name: "SIGGRAPH Asia 2026", date: "2026-12-15", note: "会议议程与论文索引" },
    { name: "CVPR 2027", date: "2027-03-01", note: "关注后续投稿窗口" }
  ]
};
