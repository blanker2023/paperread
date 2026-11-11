window.NLOS_DATA = {
  issue: {
    date: "2026-11-12",
    number: 15,
    updatedAt: "2026-11-11T16:12:24Z",
    sourceCount: 3,
    fetched: 1537,
    kept: 7,
    headline: "把多曝光融合搬进编码测量域，融合权重由「曝光 × 通道」的可靠性共同决定，计算光谱成像的动态范围实测拓宽 16 dB；先给深度差与重建误差推出上界，再让法向正则强度跟着几何可靠性走，高斯泼溅的表面重建才不必靠调参；RAW 域重建叠加 Retinex 分解与 DNG 噪声加权，暗光下的高斯泼溅不再颜色漂移、暗区残缺。",
    note: "3 天窗口三信源（arXiv / Crossref / OpenAlex）共检索 1537 条、87 次查询、产出 78 条候选，0 次请求失败——本期三信源全通，无因超时或 429 缺口的检索方向。78 条候选与往期 116 篇按 id、DOI（含 id 中 doi: 前缀）与标题三重比对，剔除重复 9 条（含第 14 期头条 DPGS-SLAM、ModalFormer、Spaghetti Splatting 等），余 69 条逐条读摘要甄别。最终收录 7 篇：T04×3 / T05×1 / T06×1 / T08×1 / T10×1，覆盖 5 个方向，跨方向 3 篇；A 级 3 篇（编码域多曝光光谱 0.92、DepthGS 0.76、RetinexGS 0.76），B 级 3 篇，C 级 1 篇。T01/T02/T03/T07/T09 空缺，均因摘要不可得或内容不属成像而非配额不足：T01 唯一真正对题的是 Optics Express 的欠扫描非视域瞬态恢复（oe.616837），出版社页面仍是 accepted 占位、无摘要，按标题检索 arXiv 亦无预印本；T02 的两条候选（时空调制超表面散射建模 oe.619234、同步辐射散斑对比 oe.612522）与 CARS 非线性显微（boe.614508）同为 accepted 占位；T03 无对题候选；T07 无候选；T09 的定量三维吸收显微（boe.620774）已是连续第三期复查、仍是占位页。当期 Crossref 命中的 Optica 系论文（oe.616837 / oe.619234 / oe.612522 / oe.615342 / ao.614831 / ao.619810 / boe.620774 / boe.614508）全部无摘要，共 8 篇，一律不据标题臆写。噪声仍占多数：J-Imaging 整期入库带来的降雨估计、可见光红外目标检测、乳腺 MRI 分割、Transformer 医学分割位置编码；SIGGRAPH/TOG 的自动绑骨、人脸绑定、计数图像理解；以及离岸锡矿船检测、咽炎分类、交通流预测、Kubernetes 缓存、加权 Dice 等跨域论文。出处已逐条核实：OpenAlex 把 10.1088/1361-6420/aec045 的 venue 污染为「COSI」，Crossref 实为 Inverse Problems；把 10.1145/3842585 与 10.1145/3842528 标为「ICCP」，实为 ACM Transactions on Graphics 45 卷 6 期（分别 1–15 页），本期收录的 Marigold V2 已按 TOG 标注。另有多条高分但判弃者：双层介质超表面太赫兹波前调控（lpor.72177）与全息光盘存储（ao.618922）属器件与材料、非成像任务；2611.14348 数字岩心流动仿真、2611.13925 需求工程基准虽被 T10 命中，实为跨领域工具；jimaging 12110569 的乳腺 MRI 分割数据集虽是数据集型工作，但面向手术规划而非成像方法，域外性过强未纳入。",
    dailyIds: ["hs-hdr-fusion", "depthgs", "retinexgs", "diff-ano-usct", "holo-retinal-rpd", "marigold-v2", "pulseq-pcasl"],
    headlineIds: ["hs-hdr-fusion", "depthgs", "retinexgs"],
    crossIds: ["hs-hdr-fusion", "retinexgs", "marigold-v2"]
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
      id: "iccv-lpp", no: 49, tier: "A", section: "core", primaryTopic: "T01", topicTags: ["T01", "T04"], confidence: 0.9, score: 0.9, evidence: "real",
      title: "Generalizable Non-Line-of-Sight Imaging with Learnable Physical Priors",
      titleZh: "可学习物理先验的可泛化非视域成像",
      authors: ["Shida Sun", "Yue Li", "Yueyi Zhang", "Zhiwei Xiong"],
      venue: "ICCV 2025, pp. 25040-25049", published: "2025-10-01", url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Sun_Generalizable_Non-Line-of-Sight_Imaging_with_Learnable_Physical_Priors_ICCV_2025_paper.pdf", code: "https://github.com/ssd1051/NLOS-LPP",
      tags: ["可学习物理先验", "跨系统泛化", "低信噪比"], primaryClass: "cs.CV",
      summary: "提出可学习路径补偿 LPC 与自适应相位场 APF，仅在合成数据上训练即可跨系统泛化到低 SNR 真实数据。通过把物理先验做成可学习模块，摆脱了对目标系统重新采集训练数据的依赖。",
      why: "跨系统泛化是 NLOS 走向真实部署的核心门槛，这篇用「可学习物理先验」正面解决，代码也已开源。"
    },
    {
      id: "nature-comm-transient", no: 50, tier: "A", section: "system", primaryTopic: "T01", topicTags: ["T01", "T03"], confidence: 0.88, score: 0.88, evidence: "real",
      title: "Iterating the Transient Light Transport Matrix for Non-Line-of-Sight Imaging",
      titleZh: "迭代瞬态光传输矩阵：在隐藏场景内独立聚焦虚拟照明与探测",
      authors: ["Talha Sultan", "Eric Brandt", "Khadijeh Masumnia-Bisheh", "Simone Riccardo", "Pavel Polynkin", "Alberto Tosi", "Andreas Velten"],
      venue: "arXiv · physics.optics", published: "2024-12-13", url: "https://arxiv.org/abs/2412.10300", pdf: "https://arxiv.org/pdf/2412.10300", doi: "10.48550/arXiv.2412.10300",
      tags: ["瞬态光传输矩阵", "虚拟照明", "直接/间接分离"], primaryClass: "physics.optics",
      summary: "用密集激光扫描配合门控 16×16 SPAD 阵列采集一阶瞬态光传输矩阵（TLTM-1），在隐藏场景内独立聚焦虚拟照明与虚拟探测，计算得到隐藏表面之间的二阶传输（TLTM-2），揭示间接阴影、互反射与体散射，并支持直接/间接分离、重打光与 dual photography。",
      why: "把光传输矩阵的完整信息量带进 NLOS，让「在隐藏场景内任意重打光」成为可能，是系统能力的实质跃升。"
    },
    {
      id: "cvpr-rm-spad", no: 51, tier: "A", section: "system", primaryTopic: "T03", topicTags: ["T03", "T01"], confidence: 0.85, score: 0.85, evidence: "real",
      title: "Image Reconstruction from Readout-Multiplexed Single-Photon Detector Arrays",
      titleZh: "读出复用单光子探测器阵列的图像重建：把多光子歧义形式化为逆问题",
      authors: ["Shashwath Bharadwaj", "Ruangrawee Kitichotkul", "Akshay Agarwal", "Vivek K Goyal"],
      venue: "CVPR 2025", published: "2025-06-01", url: "https://openaccess.thecvf.com/content/CVPR2025/html/Bharadwaj_Image_Reconstruction_from_Readout-Multiplexed_Single-Photon_Detector_Arrays_CVPR_2025_paper.html",
      tags: ["SPAD 复用", "多光子歧义", "逆问题"], primaryClass: "cs.CV",
      summary: "将 SPAD 阵列行–列读出复用带来的多光子符合歧义形式化为逆成像问题，提出概率性地分辨最多四个同时到达光子的估计器，在最优入射通量下较传统方法提升重建 PSNR 3–4 dB，并将达到同等均方误差所需的读出帧数降低约 4 倍。",
      why: "读电路是 SPAD 阵列量产的成本瓶颈，这篇用算法把硬件复用带来的歧义「算」回来，工程价值极高。"
    },
    {
      id: "josa-a-nlos", no: 52, tier: "B", section: "core", primaryTopic: "T01", topicTags: ["T01", "T03"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Non-line-of-sight imaging via physics-informed cascade learning",
      titleZh: "物理信息级联学习驱动的非视域成像",
      authors: ["Rui Zhao", "Yifan He", "Yi-Ming Lin", "Rui Chen"],
      venue: "JOSA A 43(9), E9-E18", published: "2026-09-01", url: "https://opg.optica.org/josaa/abstract.cfm?uri=josaa-43-9-E9", doi: "10.1364/JOSAA.593401",
      tags: ["物理信息", "级联学习", "噪声分离"], primaryClass: "physics.optics",
      summary: "中山大学陈瑞团队提出物理信息级联学习（PICL）：用轻量 SPAD 专用噪声分离网络（Net1）解耦信号与混合干扰，再用嵌入可微正向物理模型的重建网络（Net2）恢复隐藏场景，无需大规模配对数据集即可完成 NLOS 重建，在低信噪比下更稳健。",
      why: "国内团队在 NLOS 上的正式期刊成果，噪声分离与可微前向模型的结合思路可直接复用到单光子重建。"
    },
    {
      id: "iccp-phasor", no: 53, tier: "B", section: "efficient", primaryTopic: "T01", topicTags: ["T01"], confidence: 0.7, score: 0.7, evidence: "real",
      title: "Zero-Phase Phasor Fields for Non-Line-of-Sight Imaging",
      titleZh: "零相位相量场：在粗重建上定位隐藏表面",
      authors: ["Pablo Luesia-Lahoz", "Talha Sultan", "Forrest B. Peterson", "Andreas Velten", "Diego Gutierrez", "Adolfo Muñoz"],
      venue: "ICCP 2025", published: "2025-07-21", url: "https://doi.org/10.1109/ICCP64821.2025.11143850", doi: "10.1109/ICCP64821.2025.11143850",
      tags: ["相量场", "零相位", "深度精度"], primaryClass: "cs.CV",
      summary: "把相量场的相位信息引入 NLOS 重建：在属于隐藏几何的位置上相位为零，通过定位相位过零点即可高精度定位隐藏表面，在稀疏采样下仍达到最高 125 微米的深度精度，且对噪声稳健。",
      why: "相量场方法长期忽略相位信息，这篇给出了一条在不牺牲速度前提下的微米级深度精度路径。"
    },
    {
      id: "cvpr-opp-tof", no: 54, tier: "B", section: "system", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.7, score: 0.7, evidence: "real",
      title: "Opportunistic Single-Photon Time of Flight",
      titleZh: "机会式单光子飞行时间：被动利用环境脉冲激光指纹",
      authors: ["Sotiris Nousias", "Mian Wei", "Howard Xiao", "Maxx Wu", "Shahmeer Athar", "Kevin J. Wang", "Anagh Malik", "David A. Barmherzig", "David B. Lindell", "Kiriakos N. Kutulakos"],
      venue: "CVPR 2025 (Oral)", published: "2025-06-01", url: "https://openaccess.thecvf.com/content/CVPR2025/html/Nousias_Opportunistic_Single-Photon_Time_of_Flight_CVPR_2025_paper.html",
      tags: ["被动 ToF", "环境激光指纹", "单光子"], primaryClass: "cs.CV",
      summary: "多伦多大学团队发现脉冲激光会在入射通量的时域频域留下特有的 sinc 梳状「指纹」，用自由运行 SPAD 相机即可被动检测并计算同步，无需主动照明就能在房间尺度实现毫米级（RMSE 2.3 mm）被动 3D 成像。",
      why: "把单光子 ToF 从主动照明中解放出来，暗示了被动、隐蔽、低功耗 3D 感知的新方向。"
    },
    {
      id: "advphoton-color", no: 55, tier: "B", section: "system", primaryTopic: "T03", topicTags: ["T03", "T07"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "High-fidelity single-photon full-color imaging via frequency-spectrum cross-channel correlation",
      titleZh: "频域复用 + 跨通道关联的高保真单光子全彩成像",
      authors: ["Hongrui Liu", "Kai Song", "Yaoxing Bian", "Shijun Zhao", "Futong Zhang", "Hongda Ge", "Dong Wang", "Liantuan Xiao"],
      venue: "Advanced Photonics 8, 026007", published: "2026-03-04", url: "https://doi.org/10.1117/1.AP.8.2.026007", doi: "10.1117/1.AP.8.2.026007",
      tags: ["单光子", "全彩成像", "频域复用"], primaryClass: "physics.optics",
      summary: "太原理工大学肖连团团队用频域复用把 RGB 三色信息编码到频域谐波，配合跨通道关联网络 CC-Net 做多通道联合增强，在每像素仅约 1 个光子的条件下实现 32 fps 动态全彩成像，单像素可分辨颜色超过 4500 种。",
      why: "单光子探测器长期「只看强度不看颜色」，频域复用给出了一条打通光谱维的路线。"
    },
    {
      id: "cvpr-daps", no: 56, tier: "B", section: "core", primaryTopic: "T06", topicTags: ["T06", "T04"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Improving Diffusion Inverse Problem Solving with Decoupled Noise Annealing",
      titleZh: "DAPS：解耦噪声退火改进扩散逆问题求解",
      authors: ["Bingliang Zhang", "Wenda Chu", "Chenlin Meng", "Anima Anandkumar", "Yang Song"],
      venue: "CVPR 2025 (arXiv:2407.01521)", published: "2025-06-01", url: "https://arxiv.org/abs/2407.01521", code: "https://github.com/zhangbingliang2019/DAPS",
      tags: ["扩散后验采样", "相位恢复", "噪声退火"], primaryClass: "cs.CV",
      summary: "提出解耦退火后验采样（DAPS），通过解耦扩散采样轨迹中相邻步骤的依赖、允许大幅非局部跳跃来修正早期采样错误，在相位恢复等非线性逆问题上大幅超越 DPS、DDRM、DDNM 等基线（相位恢复 PSNR 提升约 13 dB）。",
      why: "扩散先验求解相位恢复的通用配方，把「去噪强度」与「数据一致性」解耦后收敛更稳、质量更高。"
    },
    {
      id: "intelopt-qpi", no: 57, tier: "B", section: "core", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Physics-informed deep learning transport-of-intensity quantitative phase imaging: accurate phase retrieval under partially coherent illumination",
      titleZh: "物理驱动深度学习光强传输定量相位成像（部分相干照明）",
      authors: ["Linpeng Lu", "Shun Zhou", "Yanbo Jin", "Xingyu Huang", "Habib Ullah", "Piotr Zdankowski", "Maciej Trusiak", "Malgorzata Kujawinska", "Qian Chen", "Chao Zuo"],
      venue: "Intelligent Opto-Electronics 1, 250005", published: "2025-09-25", url: "https://doi.org/10.29026/ioe.2025.250005", doi: "10.29026/ioe.2025.250005",
      tags: ["定量相位", "强度传输方程", "物理信息"], primaryClass: "physics.optics",
      summary: "南京理工大学陈钱、左超团队把 ADMM 优化算法展开成仅四层的轻量网络（PDL-TIQPI），将弱物体传输函数嵌入前向成像模型，在部分相干照明下实现高精度相位恢复，训练仅需不足百组样本即可接近理论极限。",
      why: "国内定量相位成像的代表性团队，物理信息与 TIE 的结合对低相干、大视场显微有直接价值。"
    },
    {
      id: "sciadv-spi", no: 58, tier: "B", section: "system", primaryTopic: "T06", topicTags: ["T06", "T07"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Using cyclic Hadamard masks for single-pixel quantum imaging under entangled photon illumination",
      titleZh: "循环哈达玛掩模驱动的纠缠光子单像素量子成像",
      authors: ["Shuhang Bie", "Xiaoxi Tong", "Ziyang Lv", "Hanyu Ye", "Tun Cao"],
      venue: "Science Advances 11(34)", published: "2025-08-20", url: "https://www.science.org/doi/10.1126/sciadv.adw4799", doi: "10.1126/sciadv.adw4799",
      tags: ["单像素", "哈达玛掩模", "量子成像"], primaryClass: "physics.optics",
      summary: "大连理工大学曹暾团队将循环哈达玛编码掩模与单光子探测器结合，替代传统量子成像中昂贵的增强型相机与精密同步设备，在纠缠光子照明下实现极黑、极冷、高噪声环境下的清晰成像，门控时间提升至 1 ns、分辨率 41×43 像素。",
      why: "循环哈达玛掩模把单像素量子成像的成本与复杂度大幅降下来，是其走向工程化的重要一步。"
    },
    {
      id: "nature-neat", no: 59, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.85, score: 0.85, evidence: "real",
      title: "Adaptive optical correction for in vivo two-photon fluorescence microscopy with neural fields",
      titleZh: "NeAT：基于神经场的活体双光子荧光显微自适应光学校正",
      authors: ["Iksung Kang", "Hyeonggeon Kim", "Ryan Natan", "Qinrong Zhang", "Stella X. Yu", "Na Ji"],
      venue: "Nature Methods", published: "2026-04-13", url: "https://doi.org/10.1038/s41592-026-03053-6", doi: "10.1038/s41592-026-03053-6",
      tags: ["神经场", "自适应光学", "双光子显微"], primaryClass: "physics.optics",
      summary: "UC Berkeley 团队提出 NeAT 计算框架，用神经场表示样本三维结构并同时估计波前像差，无需外部训练数据与波前传感器，即可在商用双光子显微镜上对活体小鼠脑实现实时像差校正，提升突触与神经元钙成像、谷氨酸成像的信号与精度。",
      why: "把神经场用于像差估计、无需标定数据，是计算光学「少硬件、多算法」方向的标志性成果。"
    },
    {
      id: "tci-dot", no: 60, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "High Resolution Diffuse Optical Tomography via Neural Fields",
      titleZh: "NeuDOT：基于神经场的高分辨漫射光学断层成像",
      authors: ["Siyuan Shen", "Linlin Li", "Shengyu Gao", "Yuehan Wang", "Liangtao Gu", "Shiying Li", "Xingjun Zhu", "Jiahua Jiang", "Jingyi Yu", "Wuwei Ren"],
      venue: "IEEE TCI 11, 955-966", published: "2024-10-10", url: "https://doi.org/10.1109/TCI.2024.3467923", doi: "10.1109/TCI.2024.3467923",
      tags: ["神经场", "漫射光学", "三维断层"], primaryClass: "eess.IV",
      summary: "上海科技大学任无畏团队提出 NeuDOT，用神经场连续编码体积内光吸收，替代传统体素离散化，在 14 mm 深度下以亚毫米横向分辨率解析复杂 3D 物体，兼顾模型效率与高分辨率。",
      why: "神经场与可微物理前向模型的结合在医学光学成像上的正式期刊落地，零样本重建值得关注。"
    },
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
    },
    {
      id: "2611.04068", no: 34, tier: "A", section: "system", primaryTopic: "T01", topicTags: ["T01", "T03"], confidence: 0.76, score: 0.76, evidence: "mixed",
      title: "Simulation-Driven Approach for Occlusion-Based Non-Line-Of-Sight Detection Using a Low-Cost Flash LiDAR",
      titleZh: "仿真驱动的遮挡式非视域目标检测：基于低成本闪光 LiDAR",
      authors: ["Peizhao Qiu", "Emmanuel A Olowe", "Zhenya Zang", "Istvan Gyongy", "Danial Chitnis"],
      venue: "arXiv · eess.IV", published: "2026-11-02", url: "https://arxiv.org/abs/2611.04068", pdf: "https://arxiv.org/pdf/2611.04068",
      tags: ["非视域检测", "SPAD 闪光 LiDAR", "蒙特卡洛瞬态仿真"], primaryClass: "eess.IV",
      summary: "现有非视域工作多针对「拐角后」这一典型构型，本文转向更难的目标被场景几何遮挡的遮挡式非视域场景。为绕开大规模真实数据采集的困难，作者搭建基于光子的蒙特卡洛瞬态仿真器，生成多样化合成训练数据并与实验数据对照校验；再训练 AI 模型识别与隐藏目标关联的多跳（多次反弹）光子模式。模型在合成测试集上平均精度 AP 达 0.91，直接迁移到 TMF8829 SPAD 闪光 LiDAR 采集的 180 次真实测量时，准确率 86.67%、AP 0.95，说明仿真得到的瞬态数据足以支撑低成本商用传感器完成隐藏目标检测。",
      why: "用「仿真训练 + 零样本迁移到消费级 SPAD 阵列」验证了遮挡式 NLOS 的可行性，硬件成本比 TCSPC 逐点扫描低一个量级；多跳光子模式的建模思路可直接挪到隐藏场景重建的前端检测环节。"
    },
    {
      id: "2611.01511", no: 35, tier: "A", section: "tools", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.98, score: 0.98, evidence: "sim",
      title: "OpenULF: A Modular Toolkit Enables Data-Driven Ultra-Low-Field MRI with both Classical and Quantum Sensors",
      titleZh: "OpenULF：面向经典与量子传感器的数据驱动超低场 MRI 模块化工具链",
      authors: ["Hanhan Wu", "Yuchen Yuan", "Weiwen Jiang"],
      venue: "arXiv · eess.IV", published: "2026-11-01", url: "https://arxiv.org/abs/2611.01511", pdf: "https://arxiv.org/pdf/2611.01511",
      tags: ["超低场 MRI", "开源仿真器", "SQUID 与线圈"], primaryClass: "eess.IV",
      summary: "超低场（<10 mT）MRI 便携廉价，但两类接收器各有短板：SQUID 量子传感器灵敏度高却需低温制冷，经典感应线圈室温廉价但信号更弱，二者在传统物理成像下都受低信噪比困扰。数据驱动重建已在相近逆问题上突破此类极限，超低场 MRI 却缺少公开数据集、基准与灵活仿真器。OpenULF 提供模块化开源仿真工具链：经 Bloch 方程校验的物理仿真器、标定过的 SQUID 与线圈接收模型、重建网络，以及自动化设计空间搜索引擎；接收器抽象基类、解耦物理与学习的类型化 HDF5 契约、可断点续跑的扫描引擎，使传感器、模型与数据集三者可独立替换。作者据此在四个解剖数据集上训练 774 个模型并完成三次设计空间探索，发现 ML 重建效果强烈依赖数据集与传感器，SQUID 与线圈的交叉点在 450 μT 附近，传感器硬件与模型容量在设计阶段可相互置换——最优传感器由数据集与场强决定，而非由信噪比决定。",
      why: "把「传感器—前向物理—重建网络」做成可替换的正交模块，是逆问题类工作里少见的工程化范式；对自建 NLOS / 瞬态仿真数据管线，其接口分层和可断点续跑的扫描引擎有直接参考价值。"
    },
    {
      id: "2611.01675", no: 36, tier: "B", section: "system", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.68, score: 0.68, evidence: "real",
      title: "Learned optical compression for single-pixel quantitative phase imaging",
      titleZh: "学习式光学压缩实现单像素定量相位成像",
      authors: ["Ary Portes", "Yuntian Wang", "Che-Yung Shen", "Shiqi Chen", "Aydogan Ozcan"],
      venue: "arXiv · physics.optics", published: "2026-11-01", url: "https://arxiv.org/abs/2611.01675", pdf: "https://arxiv.org/pdf/2611.01675",
      tags: ["单像素成像", "定量相位", "衍射光学编码"], primaryClass: "physics.optics",
      summary: "定量相位成像（QPI）能看到透明物体的光程差变化，但通常依赖空间分辨的强度测量。作者把衍射光学编码器与数字神经网络解码器联合优化，让与重建相关的相位信息集中到紧凑的测量向量里：单个可重构相位调制面依次显示与输入物体无关的学习式编码图案，每张图案只给出一个标量强度。可见光波段的实验系统以约 40 倍维度压缩重建未知物体的定量相位图，所用测量数仅为重建像素数的 2.55%；对手写数字与光栅状相位物体做盲测，平均 Pearson 相关系数分别为 0.945 与 0.848，同等测量预算下重建保真度明显优于其他编码策略。光学编码器固定后，只需解码器的神经自适应即可迁移到未见过的数据分布。",
      why: "把「测量矩阵」从数字掩膜搬到真实的衍射光学面，并用 2.55% 的测量数拿到 0.94 的相关系数，是单像素 / 压缩感知路线的一记强实证；「编码器固定、解码器微调」的迁移方式对跨样品、跨波段的相位成像很实用。"
    },
    {
      id: "2611.01888", no: 37, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Prior-Guided Physics-Informed Deep Learning for Fast 4D MRI Reconstruction",
      titleZh: "先验引导的物理信息深度学习用于快速 4D MRI 重建",
      authors: ["Mojtaba Safari", "Parag J. Parikh", "Shansong Wang", "Mingzhe Hu", "Philip Connell", "Stanley L. Liauw", "Ralph R. Weichselbaum", "Zhen Tian", "Xiaofeng Yang"],
      venue: "arXiv · cs.CV", published: "2026-11-01", url: "https://arxiv.org/abs/2611.01888", pdf: "https://arxiv.org/pdf/2611.01888",
      tags: ["4D MRI", "展开网络", "物理信息"], primaryClass: "cs.CV",
      summary: "提出 PGPI4MR，一种先验引导、物理信息约束的 4D MRI 重建方法：借用其他呼吸相位的信息，或同一次扫描前 30 秒的定位扫描，来提升重建质量而不增加扫描时间。网络为展开式（unrolled）结构，可从 60/30/15 秒数据重建 16 个呼吸相位，也能由 0.29–0.49 秒的数据重建单个体积；网络只在其他志愿者上训练一次，不针对新志愿者重训。在自由呼吸 MR-linac（1.5T）、腹部（3T）与大腿加压（1.5T）三组实测 k 空间上，各扫描时长的留出误差均为最低，16 个相位在扫描结束后中位 7.5–13 秒内产出；耦合 16 个相位使 60 秒数据的误差比逐相位单独重建降低 9.1%，0.49 秒亚秒重建的误差比最优对照低 15.5%，在较快的 GPU 上每个 0.29 秒窗口都能在 0.5 秒内完成采集与重建。",
      why: "把「先验」从外部数据集换成同一受试者自身的定位扫描，绕开了跨受试者泛化这道坎；展开网络加物理一致性在极短采集窗口上的增益，与瞬态成像的低光子预算重建是同一类问题。"
    },
    {
      id: "2611.04092", no: 38, tier: "C", section: "benchmark", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.52, score: 0.52, evidence: "mixed",
      title: "CHROMA-MILL: Joint Low-Light Enhancement and White Balance under Colored Illumination",
      titleZh: "CHROMA-MILL：彩色光照下低照度增强与白平衡联合校正的数据集与方法",
      authors: ["Pol Riubrogent-Comas", "David Serrano-Lozano", "Maria Pilligua", "Michael S. Brown", "Ramon Baldrich", "Javier Vazquez-Corral"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04092", pdf: "https://arxiv.org/pdf/2611.04092",
      tags: ["低照度增强", "白平衡", "RAW 数据集"], primaryClass: "cs.CV",
      summary: "低照度环境下拍到的是弱而带噪的传感器信号，低照度增强（LLIE）之后还得做自动白平衡（AWB），而同一份含噪信号同样会削弱照度推断能力。工程上通常先增强再白平衡，但这个串行策略几乎没被认真检验，因为现有低照度数据集光源范围窄、且没有照度真值可供评价 AWB。作者构建 CHROMA-MILL：用单反与手机在四种标定光源、十一个强度档下拍摄 50 个场景的 RAW 数据集；由于光可加，在线性 RAW 域做混合即可合成物理有效、色度真值精确的光源混合样本。基准测试表明联合校正最优，据此提出 CTI-Retinexformer，同时监督照度图、色度预测与光照不变的场景嵌入，较最优串行方案在 PSNR_L 上高 0.7 dB、ΔE00 低 1.1。",
      why: "补上了「光源色度真值」这一长期缺失的评测条件，并用线性 RAW 域混合扩增出物理自洽的难例；任何「先恢复再估计」的级联式计算摄影管线，都能拿它当现成反例。"
    },
    {
      id: "2611.01823", no: 39, tier: "C", section: "core", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "LUMEN: Geometry-Guided Diffusion Model for Spatially-Varying HDR Illumination Estimation",
      titleZh: "LUMEN：几何引导扩散模型的空间变化 HDR 光照估计",
      authors: ["Hongze Chen", "Fangyu Lin", "Runze Zhang", "Lingting Zhu", "Weikai Chen", "Zeyu Hu", "Yingda Yin", "Keyang Luo", "Xin Wang", "Zehong Lin", "Jun Zhang"],
      venue: "arXiv · cs.CV", published: "2026-11-01", url: "https://arxiv.org/abs/2611.01823", pdf: "https://arxiv.org/pdf/2611.01823",
      tags: ["HDR 光照估计", "扩散模型", "逆渲染"], primaryClass: "cs.CV",
      summary: "从图像估计场景光照之所以难，根源在于光照本身随几何、遮挡与光源位置而空间变化。现有做法用局部环境图或探针表示引入几何线索，但多依赖回归或参数模型，结果过度平滑、真实感有限。LUMEN 改用生成式视角：先从单视图或多视图图像重建粗略三维场景，在任意位置渲染部分环境图以编码可见性与空间结构，再与多视图图像特征融合后送入扩散 Transformer，生成完整的 HDR 环境图。为训练该模型，作者构建了 700 个室内场景、带稠密空间监督的合成数据集，含多视图 RGB、深度以及多个采样位置上的 HDR 光照。实验显示其视觉保真度与空间一致性较既有方法显著提升。",
      why: "用「渲染出的部分环境图」作条件、让扩散模型补全全向 HDR 光照，相当于给逆渲染加了一个几何感知的生成先验；这条「残缺物理观测 + 生成补全」的路径与非视域重建的思路高度同构。"
    },
    {
      id: "2611.04604", no: 40, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.76, score: 0.76, evidence: "sim",
      title: "Sparse-View 3D Coronary Reconstruction from Vessel Segmentations Using a Diffusion Prior",
      titleZh: "稀疏视角冠脉三维重建：用扩散先验补足血管几何歧义",
      authors: ["Tianyuan Wang", "Kenan Niu", "Stefano Stramigioli"],
      venue: "arXiv · eess.IV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04604", pdf: "https://arxiv.org/pdf/2611.04604",
      tags: ["扩散先验", "稀疏视角", "冠脉重建"], primaryClass: "eess.IV",
      summary: "从稀疏冠脉造影视角重建三维冠脉解剖结构可辅助经皮冠状动脉介入，但角度覆盖不足、血管分割不完美会带来显著的几何歧义。作者提出血管特异的重建框架：在冠脉血管掩膜上训练无条件三维扩散模型（不需要配对的 2D–3D 数据），推理时先用缩放视觉外壳初始化，再用基于投影的数据一致性约束扩散细化；同一模型可复用于 2、4、8 个视角而无需重训。在由 ImageCAS 的 CTA 体数据导出的仿真造影上评测 50 例冠脉树：在降低对比度的条件下，各视角数的平均 Dice 与 clDice 均高于视觉外壳、深度图像先验（DIP）与哈希网格隐式表示；8 视角时相对低对比度下最强的基线 DIP 提升约 0.13 Dice 与 0.22 clDice，高对比度下则与哈希网格隐式表示相当。最优的扩散起始时间步取决于观测质量与视角数，过度细化会在高对比度时反而降低精度；对多次随机重建取平均可继续提升精度，样本间分歧还能定位误差区域（平均精度比错误普遍率高出 0.14–0.21）。作者指出临床验证仍是必要环节。",
      why: "把「无条件扩散先验 + 视觉外壳初始化 + 投影数据一致性」拼成一条免配对数据的稀疏视角重建路线，换视角数不用重训，正好对应临床上想少拍几个角度、少给一次对比剂的需求；样本间分歧可用于误差定位，这一点比单纯刷 Dice 更实用。"
    },
    {
      id: "2611.04811", no: 41, tier: "A", section: "tools", primaryTopic: "T10", topicTags: ["T08", "T10"], confidence: 0.76, score: 0.76, evidence: "mixed",
      title: "NightIQA: A Comprehensive Dataset and Benchmark for MLLM-Based Nighttime Image Quality Assessment",
      titleZh: "NightIQA：面向多模态大模型的夜间图像质量评测数据集与基准",
      authors: ["Yiding Tian", "Jiaojiao Yi", "Jiayuan Lu", "Pufan Xu", "Jinlin Wu", "Changyuan Wen", "Hongyuan Yu"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04811", pdf: "https://arxiv.org/pdf/2611.04811",
      tags: ["夜间 IQA", "多模态大模型", "退化合成"], primaryClass: "cs.CV",
      summary: "夜间图像天然带有复合退化，质量评估格外困难。基于分数的方法把质量压成一个数字，缺少语言化的多维推理；多模态大模型是更全面的替代方案，却受制于数据缺口——现有真实 IQA 数据集大多以白天为主且拍摄设备老旧，合成数据又缺少夜间特有退化建模，伪影与真实夜拍相去甚远。NightIQA 由三部分组成：NightIQA-Real 是作者用现代设备自采的 1769 张高分辨率真实图像，覆盖六类典型失真并带结构化多维标注；NightIQA-Bench 是 1078 道视觉定位式选择题，按感知、技术评估、定位、推理四级层次组织；NightIQA-Syn 是场景感知的合成管线，联合建模全局与实例级退化，首发 8 万张高保真图像并公开完整生成代码。以监督微调加 GRPO 在 NightIQA 上训练后，Qwen3-VL-8B 超过开源 IQA 方法，整体准确率也高于主流闭源模型。",
      why: "夜间低照度是计算摄影最难也最日常的场景，这份工作把质量评价从单一分数推进到可解释的多维语言判断，还附了一条可扩展的退化合成管线——做低照度增强、去噪、HDR 的组可以直接拿它当评测口径，而不必再自建主观实验。"
    },
    {
      id: "2611.04427", no: 42, tier: "B", section: "system", primaryTopic: "T02", topicTags: ["T02", "T04"], confidence: 0.68, score: 0.68, evidence: "real",
      title: "Reference-Beam-Assisted Perturbation-Resistant Imaging Through A Single Multimode Fiber",
      titleZh: "参考光辅助：单根多模光纤在扰动下的抗扰成像",
      authors: ["Bowen Sun", "Maohan Li", "Jingwei Luo", "Zhuoren Wan", "Zhaoyang Wen", "Yuan Chen", "Wending Huang", "Zijian Wang", "Ming Yan", "Heping Zeng"],
      venue: "arXiv · physics.optics", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04427", pdf: "https://arxiv.org/pdf/2611.04427",
      tags: ["多模光纤", "散斑成像", "参考光"], primaryClass: "physics.optics",
      summary: "多模光纤成像对机械扰动高度敏感，扰动会改变模式耦合、破坏散斑到目标的映射。作者提出参考光辅助的重建方法：一束独立参考光与成像信号走同一根光纤，但不经目标调制，其散斑图案因此提供了与目标无关的传输状态信息，无需再额外搭建构型感知结构；神经网络联合处理信号散斑与参考散斑来重建目标。在 MNIST 与 Fashion-MNIST 上跨 10 种光纤构型实验，重建质量、训练收敛速度与构型识别准确率均有提升；进一步在 40 种构型上验证了参考光辅助相对更大扰动状态集合的增益。作者希望以此为基础发展面向柔性内窥与微创光学诊断的扰动自适应多模光纤成像系统。",
      why: "把同路参考光当成传输矩阵的实时探针，等于用光路本身替代了额外的标定硬件，成本几乎为零；散斑去相关正是散射介质成像与光纤束内窥最头疼的问题，跨 40 种构型的泛化也贴近光纤被弯折的真实使用状态。"
    },
    {
      id: "2611.04498", no: 43, tier: "B", section: "benchmark", primaryTopic: "T04", topicTags: ["T04", "T08"], confidence: 0.64, score: 0.64, evidence: "mixed",
      title: "3DGS-VBench+ and 3DGSV-Assessor: A Multi-Dimensional Subjective Benchmark and a Reference-Flexible Objective Model for 3D Gaussian Splatting Video Quality Assessment",
      titleZh: "3DGS-VBench+ 与 3DGSV-Assessor：三维高斯泼溅视频质量的多维主观基准与参考灵活客观模型",
      authors: ["Yuke Xing", "William Gordon", "Jiarui Wang", "Yujie Zhang", "Guangtao Zhai", "Yiling Xu"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04498", pdf: "https://arxiv.org/pdf/2611.04498",
      tags: ["3DGS 质量评价", "多维 MOS", "减参考"], primaryClass: "cs.CV",
      summary: "三维高斯泼溅（3DGS）可实现实时新视角合成，但存储开销大、压缩不可回避，训练与压缩都会引入表征特有的失真；不少生成式压缩方法对几何与颜色属性采用不同参数，会诱发维度特异的失真，因此需要多维评价。而真实采集通常没有与新轨迹对齐的真值视频，只有稀疏的拍摄视角可作参考。作者构建 3DGS-VBench+：3036 个 3DGS 重建各配一段渲染视频，覆盖 11 个真实与 22 个合成场景、6 种代表性压缩算法与系统设计的码率档，标注 9108 个 MOS，分整体、几何、颜色三个维度。基于该基准提出 3DGSV-Assessor：参考灵活的多模态框架，一次生成同时给出三维分数，并通过有界门控把基于排序的参考线索注入冻结回归器，同时支持减参考与无参考两种模式；在基准上与人类感知的相关性达到当前最优，并能零样本迁移到其他新视角合成基准。",
      why: "神经渲染的质量评价长期靠 PSNR/SSIM 硬套，而 3DGS 的失真恰恰是几何与颜色分离的。本文把这两个维度拆开度量，又正面解决了真实采集缺少对齐真值这个落地障碍——3DGS 要从实验室走向采集端，这类评测基础设施比再多一个训练技巧更缺。"
    },
    {
      id: "2611.05020", no: 44, tier: "C", section: "physics", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "mixed",
      title: "ConvexAD: differentiable phase retrieval with geometric regularization for high-strain, low-signal Bragg coherent diffraction imaging",
      titleZh: "ConvexAD：几何正则的可微相位恢复，用于高应变低信号布拉格相干衍射成像",
      authors: ["Matteo Masto", "Ewen Bellec", "Etienne Polack", "Jiangtao Zhao", "Vincent Favre-Nicolin", "Steven J. Leake", "Tobias Schülli", "Marie-Ingrid Richard"],
      venue: "arXiv · cond-mat.mes-hall", published: "2026-11-03", url: "https://arxiv.org/abs/2611.05020", pdf: "https://arxiv.org/pdf/2611.05020",
      tags: ["布拉格相干衍射", "相位恢复", "凸多面体参数化"], primaryClass: "cond-mat.mes-hall",
      summary: "布拉格相干衍射成像（BCDI）依赖相位恢复这一非凸、病态逆问题，噪声、部分相干以及被成像纳米晶自身的应变与晶体缺陷都会让条件变差。传统的交替投影与深度学习方法都把物体放在密集体素网格上表示，容易出现振幅—相位混叠，在上述条件下会愈发病态，常无法可靠给出颗粒形状与应变的三维映射。ConvexAD 把物体形状参数化为凸多面体——由半空间交集构造，并按构造保证其内部振幅平坦，从而在原理上消除振幅—相位混叠、减少可训练参数，进而改善收敛；实现上基于 JAX，获得原生 GPU 加速与前向模型灵活性。作者在仿真与实验 BCDI 数据上验证：在高应变、低信号与低相干条件下，其表现优于传统方法与深度学习辅助的相位恢复，拓展了可做定量 BCDI 重建的工况范围。",
      why: "把先验直接写进参数化，而不是在损失里加一项正则——用凸多面体表达纳米颗粒，是对相位恢复病态性的结构性解法。任何要从衍射或瞬态测量里恢复稀疏几何的反演问题，都能借用这个「形状假设即正则化」的思路。"
    },
    {
      id: "2611.05206", no: 45, tier: "C", section: "core", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.52, score: 0.52, evidence: "mixed",
      title: "Diffusion Plug-in Priors for Self-Supervised Ultrasound Video Restoration",
      titleZh: "UltraDiff：冻结扩散先验下的自监督超声视频超分与去散斑",
      authors: ["Chu Chen", "Mingduo He", "Yining Li", "Yinhao Wu", "Wei Tang", "Yiwen Luo", "Yixuan Chen", "Graham Treece", "Pasquale Cascarano", "Kangning Cui"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.05206", pdf: "https://arxiv.org/pdf/2611.05206",
      tags: ["超声恢复", "扩散先验", "散斑统计"], primaryClass: "cs.CV",
      summary: "超声视频受硬件约束分辨率有限，又叠加与信号相关的散斑，而配对的低/高分辨率采集几乎不可能获得。UltraDiff 把预训练扩散模型当作冻结的即插即用先验，通过优化采样器的隐变量种子，在带范围约束的最大后验框架下逐帧恢复，既不需要配对数据也不必重训网络。作者从瑞利尺度族模型推导出散斑感知的数据保真项，刻画其相对残差与方差自适应加权性质，并给出对正观测在对数强度上严格凸、下界有保证的稳定形式；再以全变分正则配合扩散先验，并用前一帧优化得到的种子热启动下一帧以维持时间一致性。在 EchoNet-LVH 的仿真散斑加噪视频上，PSNR 比最强基线高 1.24 dB，换用超声相关先验还能进一步提升；在真实临床心脏超声视频上，零样本射血分数预测的平均绝对误差由 7.31 降到 6.37 个 EF 点。方法不绑定特定扩散权重，代码将在接收后公开。",
      why: "把散斑的统计模型写成保真项、把扩散模型冻结成先验，是「无真值、无配对」条件下最实用的一类逆问题解法；更难得的是它用下游临床指标（EF 误差）而非仅 PSNR 来证明恢复的价值——这种评测方式值得成像重建类工作借鉴。"
    },
    {
      id: "2611.05008", no: 46, tier: "C", section: "efficient", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Learned Smartphone ISP on Mobile GPUs: Mobile AI 2026 Challenge Report",
      titleZh: "移动 GPU 上的学习式手机 ISP：Mobile AI 2026 挑战赛报告",
      authors: ["Andrey Ignatov", "Georgy Perevozchikov", "Radu Timofte", "Yuhong He", "Yuxuan Qiu", "Tianyu Hao", "Ruoqi Li", "Yueqi Yang", "Chaoyu Feng", "Dongqing Zou", "Lei Lei", "Na Jiang", "Yongrui Zhang", "Hailong Yan", "Xiangtao Zhang", "Ao Li", "Le Zhang", "Andrei Arhire", "Jing Fang", "XingLin Xie", "YiChen Lu", "Haibo Xu"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.05008", pdf: "https://arxiv.org/pdf/2611.05008",
      tags: ["手机 ISP", "RAW 到 RGB", "端侧时延"], primaryClass: "cs.CV",
      summary: "手机影像质量日益依赖计算摄影与先进 ISP 算法，但模型必须能在受限的移动硬件上运行。本次挑战要求参赛者从 RAW Bayer 数据重建 RGB 照片，并在高通与 Arm 的主流手机 GPU 上跑通。比赛提供大规模 Fujifilm UltraISP 数据集，由 Sony IMX586 Quad Bayer 手机传感器拍摄的 RAW 与专业 102MP 中画幅 FujiFilm GFX100 拍摄的 RGB 配对构成；所有模型的运行时间均在骁龙 8 Elite Gen 5 与天玑 9500 上（对应 Adreno 与 Mali GPU）实测。最优方案能在两个平台上于 100 毫秒内从 RAW 重建高质量 5MP RGB 图像，报告汇总了各参赛模型的完整描述。",
      why: "这是移动端 ISP 现状的一手横评：同一份 RAW–RGB 数据、同一套旗舰芯片实测时延，能直接看出「画质—延迟」的真实权衡点。做端侧计算摄影选型时，这类挑战赛报告往往比单篇方法论文更有参考价值。"
    },
    {
      id: "2611.03455", no: 47, tier: "C", section: "tools", primaryTopic: "T09", topicTags: ["T09"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Bg-Mix: On Using Image Backgrounds for Data Augmentation in Electron Microscopy Images",
      titleZh: "Bg-Mix：用图像背景做电镜图像的数据增强",
      authors: ["Ankur Srivastava", "Joana Sarah Grah", "Katharina Ladewig", "Nils Körber"],
      venue: "arXiv · cs.CV", published: "2026-11-02", url: "https://arxiv.org/abs/2611.03455", pdf: "https://arxiv.org/pdf/2611.03455",
      tags: ["电镜图像", "数据增强", "目标检测"], primaryClass: "cs.CV",
      summary: "电子显微镜是病毒学中观察病毒颗粒、支撑科研诊断与形态表征的支柱手段，计算机辅助图像分析能显著提速这一人力密集流程，但典型的电镜病毒数据集规模小、标注稀疏，难以训练出可用的深度学习模型。为绕开数据短缺、同时利用内容丰富的多样背景，作者提出 Bg-Mix：把训练图像分解为前景目标与背景，再将二者重新组合成新的增强图像。这样做既提升了目标检测模型的表现，也增加了训练数据的多样性；在两个数据集、两种架构上测试，box mAP 相对基线提升 0.8 至 3.3 个点。",
      why: "显微与电镜场景的真实瓶颈往往是标注量而非模型容量，把「背景」当成可复用的数据资源是近乎零成本的解法；这套前后景解耦的增强思路可以照搬到其他样本稀缺的成像检测任务上。"
    },
    {
      id: "2611.04877", no: 48, tier: "C", section: "physics", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Sampling Density for Multi-window STFT Phase Retrieval",
      titleZh: "多窗 STFT 相位恢复的采样密度：密度 2 的最优界",
      authors: ["Wenchang Sun", "Mengxuan Zhou"],
      venue: "arXiv · math.CA", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04877", pdf: "https://arxiv.org/pdf/2611.04877",
      tags: ["相位恢复", "采样密度", "唯一性"], primaryClass: "math.CA",
      summary: "研究多窗短时傅里叶变换的相位恢复问题，窗函数取前两个归一化 Hermite 函数的复线性组合，并假设该窗系数向量族在二维复空间上可做相位恢复。作者证明：只要采样集是可分的且其下 Beurling 密度大于 2，或者是密度不低于 2 的平移格点，多窗幅度采样就能把平方可积函数空间中的任意信号唯一确定到全局相位；并进一步说明该采样密度已是最优，改进了 Grohs、Liehr 与 Rathmair 于 2025 年在《泛函分析杂志》上关于多窗 STFT 相位恢复格点唯一性的结果。",
      why: "采样密度决定相位恢复所需测量数的下限，本文把「多窗 STFT 到底要多密才唯一」证到了一个紧的界，还证明该界最优。对设计叠层衍射、傅里叶叠层这类以窗滑动为核心的采集协议，这是可以直接用来定标采样步长的理论依据。"
    },
    {
      id: "siam-rsdt", no: 61, tier: "B", section: "physics", primaryTopic: "T02", topicTags: ["T02", "T04"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Raster Scan Diffraction Tomography",
      titleZh: "光栅扫描衍射层析：把聚焦波束纳入衍射层析框架",
      authors: ["Peter Elbau", "Noemi Naujoks", "Otmar Scherzer"],
      venue: "SIAM Journal on Imaging Sciences", published: "2026-11-02", url: "https://doi.org/10.1137/26m1854367", doi: "10.1137/26m1854367",
      tags: ["衍射层析", "Herglotz 波", "扫描几何"], primaryClass: "math.NA",
      summary: "衍射层析是弱散射介质定量成像的常用逆散射技术，但其传统表述假设单色平面波照明——这个简化与医学超声等实际系统不符，后者用聚焦波束扫描人体感兴趣区；这类「聚焦照明 + 扫描」的测量装置此前一直没能进入衍射层析框架。作者把入射场建模为 Herglotz 波（平面波在单位球面上的连续叠加），从而将聚焦波束纳入理论，在该设定下导出新的傅里叶衍射关系，作为从扫描数据做定量层析重建的基础；并据此系统分析了不同扫描几何对重建结果的影响。",
      why: "把「聚焦 + 扫描」这种最常见的实际采集方式写进衍射层析的数学框架，而不是硬套平面波假设——对超声、光声、OCT 这类用聚焦探头逐点扫的模态，这是重建公式层面的修正，而不是又一个网络结构。"
    },
    {
      id: "2611.06784", no: 62, tier: "C", section: "physics", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Fundamental Limits of Coherent Imaging in The Presence of Atmospheric Turbulence",
      titleZh: "大气湍流下相干成像的根本极限：幅度与相位联合估计的极小极大速率",
      authors: ["Songbin Liu", "Hanyu Yang", "Junren Chen", "Arian Maleki"],
      venue: "arXiv · math.ST", published: "2026-11-04", url: "https://arxiv.org/abs/2611.06784", pdf: "https://arxiv.org/pdf/2611.06784",
      tags: ["大气湍流", "散斑", "极小极大风险"], primaryClass: "math.ST",
      summary: "研究复值多视相干成像中同时估计信号幅度与大气相位失真的根本极限：观测受乘性散斑与加性高斯噪声污染，各视共享一个已知的高斯感知矩阵，两个参数都属于结构化的函数类。作者分析约束最大似然估计器，给出在容许参数类上一致成立的联合极小极大风险上界；再用 oracle 归约与 Fano 型论证给出最坏情况下界，量化结构复杂度、信号与测量维度、视数、噪声水平各自的作用，并在多数组态下得到匹配的极小极大速率——低噪声且测量维数大于信号维数时，相位估计仍留有一段间隙。作者还在实值情形构造两阶段估计器，在附加条件下以高概率把符号恢复到全局符号，并给出不含失真复杂度项的一致风险界；数值实验验证了联合误差、信号误差与相位误差随模型参数的变化。",
      why: "「多视平均能救回多少相位」过去基本靠仿真经验，这篇给出了极小极大意义下的定量答案，还指出相位估计在低噪声、过采样条件下存在本质间隙——做自适应光学、穿透湍流或散射介质成像时，可以据此判断该加视数还是改算法。"
    },
    {
      id: "2611.05843", no: 63, tier: "C", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Dual Flow: Joint Image-Measurement Flow for Inverse Problems",
      titleZh: "Dual Flow：图像域与测量域耦合的联合流模型解线性逆问题",
      authors: ["Sevket Ege Yesilyurt", "Figen S. Oktem"],
      venue: "arXiv · eess.IV", published: "2026-11-04", url: "https://arxiv.org/abs/2611.05843", pdf: "https://arxiv.org/pdf/2611.05843",
      tags: ["流模型", "逆问题", "前向模型一致性"], primaryClass: "eess.IV",
      summary: "现有基于生成模型的线性逆问题求解方法，多用含噪测量在图像域做条件或引导采样；Dual Flow 把图像重建与测量去噪写成一个耦合估计问题，在图像域和测量域各跑一个流模型并联合更新——含噪测量只用于初始化测量状态，之后两域状态互相驱动。按构造，最终的图像与测量估计严格满足前向模型。作者推导了联合流的采样更新（由给定联合状态下干净图像的条件均值决定），给出联合状态充分统计量的闭式表达，并证明所需条件均值可化为一个带算子相关噪声的图像域高斯去噪问题，据此训练速度预测网络。方法除推理步数外无需调超参，重建时间显著短于对比方法；在多种线性逆问题与图像数据集上取得失真指标与感知质量的当前最优，并额外分析了模型失配鲁棒性、多样本生成与不确定性刻画能力。",
      why: "绝大多数扩散/流先验只把测量当「外挂约束」，这篇让测量自己也成为一个被去噪的状态，于是「重建结果必须满足前向模型」变成构造性保证而不是罚项——对压缩感知、单像素、层析这类前向算子明确的成像问题非常直接。"
    },
    {
      id: "sparc-xray", no: 64, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.65, score: 0.65, evidence: "mixed",
      title: "A foundation model for three-dimensional anatomical reconstruction from sparse X-ray projections",
      titleZh: "SPARC：从稀疏 X 光投影重建三维解剖的基础模型",
      authors: ["Yiqun Lin", "Jiayang Xu", "Lie Ju", "Jiarong Guo", "Weiru Wang", "Hualiang Wang", "姚慧峰", "Haoran Sun", "Bin Pu", "Kenli LI", "Daniel Alexander", "Hejie Cui", "Yukun Zhou"],
      venue: "Research Square（预印本）", published: "2026-11-02", url: "https://doi.org/10.21203/rs.3.rs-11354431/v1", doi: "10.21203/rs.3.rs-11354431/v1",
      tags: ["稀疏视角", "X 光三维重建", "基础模型"], primaryClass: "eess.IV",
      summary: "CT 能给出三维解剖信息，但设备昂贵、辐射剂量高于常规 X 光；若能仅用少量 X 光投影重建三维结构，就能把广泛存在的 X 光机从二维扩展到三维。作者提出 SPARC：在 47,149 例胸部 CT 上一次性预训练的基础模型，可适配不同 X 光采集构型与解剖部位。在覆盖五个部位（八个数据集中有七个主要位于胸部以外）的评测里，SPARC 的重建保真度优于五种现有方法——八投影时 PSNR 比最强基线高 0.8–2.6 dB，四投影时高 1.4–2.7 dB。把基于 CT 训练的异常分类与器官分割工具直接用于 SPARC 的八投影重建（不足 CT 数百层投影的 3%），18 种胸部异常的 AUC 达到 CT 上的 98%，腹部器官与肺叶的 Dice 分别为 86% 与 93%，相对最强对比方法高出 8.8% 与 4.4%。预训练还大幅提升适配数据效率：用 10 例患者微调，重建精度即优于同架构从零训练的 100 例。模型与代码已公开。",
      why: "稀疏视角重建的真正门槛不是 PSNR，而是「下游诊断工具还能不能用」；这篇直接用分类/分割工具在重建体上的保持率来证明，而且 10 例微调就超过 100 例从零训练——对想做稀疏采集 + 基础模型的组，这套评测口径比单纯刷指标更有说服力。注意：目前是 Research Square 预印本，尚未经同行评审。"
    },
    {
      id: "lpr-petg", no: 65, tier: "B", section: "system", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Microscale Photoelasticity Engineering in PETG Polymer for Spectroscopic Applications",
      titleZh: "PETG 中的微尺度光弹工程：为重建式光谱仪做时空编码单元",
      authors: ["Shiqi Liu", "Zhuo Wang", "Fanrong Zeng", "Jihong Han", "Han Lin", "Baohua Jia", "Zongyin Yang", "Jianrong Qiu", "Bo Zhang"],
      venue: "Laser & Photonics Reviews", published: "2026-11-02", url: "https://doi.org/10.1002/lpor.72147", doi: "10.1002/lpor.72147",
      tags: ["光谱编码", "光弹双折射", "重建式光谱仪"], primaryClass: "physics.optics",
      summary: "光谱响应器件的小型化是可集成「计算增强光谱系统」的关键，但器件尺寸越小响应带宽越窄，只能靠堆叠大量结构各异的响应单元来补足采样数。作者提出用光弹效应工程化光谱响应：以超快激光在聚对苯二甲酸乙二醇酯（PETG）内写入微涡旋结构，借其随频率变化的应力双折射实现高效时空编码。单个编码单元即可覆盖 400–1550 nm，物理尺寸紧凑，光谱特性还能通过偏振调节，从而提供像素级可调、信息量丰富的响应，服务于重建式光谱。作者在偏振取向分析、光谱成像与双模态生物特征认证三类任务上演示了该结构，并指出这条路径可在热塑性介质内实现高效光谱编码，走向低成本、易集成的光谱系统。",
      why: "计算光谱仪的核心矛盾是「编码单元要小、编码要多样」，这篇把编码自由度从结构几何转到偏振与应力，一个单元就覆盖可见到近红外——是往低成本、可批量集成的重建式光谱仪方向推进的一块硬件拼图。"
    },
    {
      id: "boe-oral", no: 66, tier: "B", section: "system", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Portable dual-mode multispectral system for quantitative oral imaging of hemoglobin and bacterial porphyrins",
      titleZh: "便携双模态多光谱口腔成像：定量血红蛋白与细菌卟啉",
      authors: ["Zongze Huo", "Erica Y. Chu", "Ruikang K. Wang"],
      venue: "Biomedical Optics Express", published: "2026-11-02", url: "https://doi.org/10.1364/boe.618059", doi: "10.1364/boe.618059",
      tags: ["RGB 光谱复原", "Wiener 估计", "口腔筛查"], primaryClass: "physics.optics",
      summary: "作者提出一套紧凑的口腔双模态多光谱成像系统，集成白光反射与紫外诱导自发荧光两路。可见光反射光谱由商用 RGB 相机经多项式增强的 Wiener 估计器复原，交叉偏振片用于抑制釉质与唾液产生的镜面反射。白光模式下，重建光谱被映射为血红蛋白指数与血氧饱和度指数，在红斑黏膜与外观正常黏膜之间呈现出对比；紫外模式下，卟啉指数在易积菌斑部位升高。两种模式的重建精度都用校准色卡做了验证。该平台成本低、可便携，适合口腔评估与纵向随访。",
      why: "只用一颗 RGB 相机加一个可解释的线性复原器就拿到逐像素光谱指数，工程门槛极低；交叉偏振抑制镜面反射这个细节，是口腔、皮肤这类潮湿高反表面做光谱成像绕不开的一步，比换更大的网络更管用。"
    },
    {
      id: "2611.06736", no: 67, tier: "C", section: "physics", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.52, score: 0.52, evidence: "sim",
      title: "Universality of smallest singular values of random row submatrices and phase retrieval problems",
      titleZh: "随机行子矩阵最小奇异值的普适律：相位恢复的唯一性不等于稳定性",
      authors: ["Shu Wen", "Christian E. Häggblom", "Xiufan Yang"],
      venue: "arXiv · math.PR", published: "2026-11-04", url: "https://arxiv.org/abs/2611.06736", pdf: "https://arxiv.org/pdf/2611.06736",
      tags: ["相位恢复", "条件数", "唯一性阈值"], primaryClass: "math.PR",
      summary: "论文为随机行子矩阵的极端最小奇异值、以及实相位恢复在唯一性阈值附近的全局稳定性，建立了普适的对数律。设 A_m 为 i.i.d. 中心化、方差为一的亚高斯实矩阵，且 N_m/m→γ>1；记 M 为所有 m+r_m 行行子矩阵上最小奇异值的最小值，k_m=r_m+1，作者证明当 k_m log m = o(m) 时，(k_m/m)·log M 依概率收敛到 −h(γ)，其中 h(γ)=γlogγ−(γ−1)log(γ−1)，且该极限速率在给定的分布类内普适。对 N_m=2m−1+r_m 次幅度测量的实相位恢复，令 L 为映射 x↦|A_m x| 在模去全局符号意义下的最优下 Lipschitz 常数、κ=‖A_m‖/L 为尺度不变的全局条件数，则同一区域内 (k_m/m)·log L → −log4、(k_m/m)·log κ → log4。结论是：即便这些测量几乎必然把任意信号唯一确定到符号，条件数仍随维数指数增长，在所述区域内以趋于 1 的概率超过 m 的任意固定幂——这量化了「唯一性」与「噪声下一致稳定」的差别。",
      why: "相位恢复领域长期把「测量够多就唯一」当作好消息，这篇证明唯一性几乎免费、稳定性却指数级昂贵；做叠层衍射、傅里叶叠层、编码衍射时，它给出了「多测一点到底值多少」的定量标尺。"
    },
    {
      id: "2611.04548", no: 68, tier: "C", section: "core", primaryTopic: "T07", topicTags: ["T07"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Predicting Void Points in Self-Occluding Forest Volumes",
      titleZh: "在自遮挡森林体数据中预测空点：改标签而非改成像",
      authors: ["Benjamin Bachmayr", "Mohamed Youssef", "Oliver Bimber"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.04548", pdf: "https://arxiv.org/pdf/2611.04548",
      tags: ["合成孔径成像", "焦栈", "空区标注"], primaryClass: "cs.CV",
      summary: "合成孔径成像（SAI）让无人机通过把多个位移视角在同一深度上翘曲平均来观测林冠，但遮挡只是被压制而非被消除，观测不足的区域会显得「有东西」，导致生物量被系统性高估。Deep Forest 项目无法区分重建伪影与真实植被，因为其训练数据只含实测反射点、把空区排除在外，网络学不到显式的占据边界。本文不改成像流程而改训练标签：每个仿真场景渲染两次，一次是 9×9 俯视阵列用于生成焦栈，一次是按场景几何切出的 550 层厚度切片作为占据标签，把空区显式标为负类。Gazebo 管线生成含 80–200 棵树、三个树种的程序化林分，预训练 Pix2Pix 把渲染 RGB 转成近红外波段，光场渲染生成 550 层的三通道对齐焦栈。在留出场景上评估四种架构：普通 2D U-Net 的 IoU 为 0.6290，优于体素 3D U-Net 的 0.5707；传统重建方法明显更差（COLMAP 0.3446、DepthAnything3 0.2959，均已做过最优膨胀扫描）；RGB 输入的体素变体在不做膨胀与逐场景标定下取得最高 IoU 0.6514。",
      why: "用「焦栈当输入、占据当标签」直接绕开多视图几何，说明在密集遮挡场景里显式标注空区比换更强的重建器更有效——这类「标签侧修正」的思路可以迁移到任何弱纹理、强遮挡的合成孔径重建任务。"
    },
    {
      id: "rs-lfsr", no: 69, tier: "B", section: "core", primaryTopic: "T07", topicTags: ["T07"], confidence: 0.65, score: 0.65, evidence: "mixed",
      title: "Arbitrary-Scale Light Field Super-Resolution via Spatio-Angular Consistent Neural Epipolar Geometry Learning",
      titleZh: "任意尺度光场超分：时空角度一致的神经极线几何学习",
      authors: ["Lili Lin", "Wenyu Li", "Hao Zheng", "Qiming Fang", "Jiahan Meng", "Wenhui Zhou"],
      venue: "Research Square（预印本）", published: "2026-11-02", url: "https://doi.org/10.21203/rs.3.rs-11144103/v1", doi: "10.21203/rs.3.rs-11144103/v1",
      tags: ["光场超分", "极线平面图", "隐式表示"], primaryClass: "cs.CV",
      summary: "光场成像同时记录光线的空间与角度信息，但空间分辨率与角度分辨率之间的固有权衡限制了它的应用。作者提出一种时空角度一致（spatio-angular consistent）的局部神经极线几何学习框架，用于任意尺度光场超分：把光场的极线平面图（EPI）建模为连续的局部隐式几何函数，从而在角度域与空间域同时实现超分。在合成与真实数据集上，该方法在任意放大倍数下都保持了较高的几何结构保真度。",
      why: "光场超分的老问题是「放大倍数一变就得重训」，把 EPI 当作连续隐式函数后，尺度从超参变成了输入——这条任意尺度连续表示的路子在光场、显微光场、阵列相机上都能直接套用。注意：目前是 Research Square 预印本，尚未经同行评审。"
    },
    {
      id: "lpr-slim", no: 70, tier: "B", section: "system", primaryTopic: "T09", topicTags: ["T09"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "SLIM: Functional Nanoscopy for Simultaneous Super‐Resolution Imaging and Quantitative Lifetime Mapping by Spatiotemporal Multiplexing of Spontaneous Emission",
      titleZh: "SLIM：靠自发辐射的时空复用同时做超分辨与定量寿命成像",
      authors: ["Luwei Wang", "Min Yi", "Yue Chen", "Qinglin Chen", "Jia Li", "Xiaoyu Weng", "Liwei Liu", "Junle Qu"],
      venue: "Laser & Photonics Reviews", published: "2026-11-04", url: "https://doi.org/10.1002/lpor.72160", doi: "10.1002/lpor.72160",
      tags: ["STED", "荧光寿命", "时间解复用"], primaryClass: "physics.optics",
      summary: "观测细胞器相互作用、蛋白聚集、代谢调控这类纳米尺度过程，需要同时拿到结构细节与功能状态。基于受激辐射耗尽（STED）的超分辨可与荧光寿命成像（FLIM）结合，但耗尽光会扰动荧光衰减动力学、损害寿命精度；常规 FLIM 又受衍射极限限制。作者提出 SLIM：用脉冲激发光配一束延时可调（纳秒量级）的 STED 耗尽光，在每次采集周期内开出一个时间窗口，把自发辐射与受激辐射在时间上分开，从而同时获取超分辨结构与定量寿命。相对衍射受限的 FLIM，结构分辨率提升 3–5 倍，寿命精度保持在共聚焦参考值的 5% 以内，且耗尽功率比常规 STED 低一个数量级。作者在多种生物样本上演示，并实现了细胞器动态的长时间活细胞成像。",
      why: "超分辨与寿命成像长期互斥，因为耗尽光会改寿命；这篇不换探针、不加重建网络，而是用「时间窗口」把两种发射在时间维度上解复用——是把复用/解复用思维真正用在显微系统设计上的典型例子，对瞬态成像也有借鉴意义。"
    },
    {
      id: "cosrev-spec3d", no: 71, tier: "B", section: "benchmark", primaryTopic: "T10", topicTags: ["T05", "T10"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Spectral 3D computer vision: A survey of acquisition, representations, learning, and applications",
      titleZh: "光谱三维计算机视觉综述：采集、表示、学习与应用",
      authors: ["Ali Zia", "Usman Ali", "Charissa Yu", "Jun Wei Zhou"],
      venue: "Computer Science Review", published: "2026-11-03", url: "https://doi.org/10.1016/j.cosrev.2026.101084", doi: "10.1016/j.cosrev.2026.101084",
      tags: ["高光谱三维", "综述", "基准与标定"], primaryClass: "cs.CV",
      summary: "光谱三维视觉把波长分辨的测量与几何信息结合起来，支撑材料感知的重建、感知与场景分析，但文献分散在高光谱/多光谱传感、跨光谱深度与位姿估计、光谱点云、LiDAR–高光谱融合以及神经场景表示等方向。本文做结构化综述：覆盖光谱与几何采集、数据表示、标定与配准、光谱三维重建、集成式光谱三维采集与联合物理建模、学习方法、下游任务、基准数据集、应用与软件工具；把现有方法归为三条互补主线——光谱支撑三维信息估计、光谱三维重建与建图、集成式光谱三维采集与联合物理建模；并比较代表性数据集与在分类、回归、分割、语义场景分析、光谱新视角合成上的报告结果。核心判断是：当 RGB 外观或几何单独不足时，光谱确实能提供互补的材料、状态与可见性线索，但收益大小依赖任务与基线，很多报告的增益并未把光谱贡献与同时发生的传感、架构、空间上下文或融合方式变化隔离开。领域进展受限于原生光谱三维基准稀缺、辐射与几何标定不一致、评测协议异构、跨传感器跨域验证不足。作者给出标准化基准、不确定性感知融合、物理约束学习、高效光谱三维表示与跨域泛化等优先方向。",
      why: "这份综述最有用的是「泼冷水」那部分：明确指出多数光谱增益没做消融、基准与标定不统一。要做光谱–几何联合采集，先照它的清单核对评测协议，比再读十篇刷点论文更省时间。"
    },
    {
      id: "2611.07665", no: 72, tier: "A", section: "core", primaryTopic: "T08", topicTags: ["T08", "T04"], confidence: 0.76, score: 0.76, evidence: "real",
      title: "CoGenRec: A Unified Generative Framework for Complementary Vision Reconstruction",
      titleZh: "CoGenRec：把互补传感器的两条通路统一进一个生成式重建框架",
      authors: ["Yapeng Meng", "Yuguo Chen", "Xiangru Chen", "Shaojun Xu", "Xuezhen Wang", "Lijian Wang", "Zheyu Yang", "Yihan Lin", "Luping Shi", "Rong Zhao"],
      venue: "arXiv · cs.CV", published: "2026-11-05", url: "https://arxiv.org/abs/2611.07665", pdf: "https://arxiv.org/pdf/2611.07665",
      tags: ["互补传感器", "视频扩散先验", "去模糊/插帧/HDR"], primaryClass: "cs.CV",
      summary: "采集极高速运动与高动态范围场景，本质上受制于时间分辨率、空间细节、信噪比与动态范围之间的权衡——在有限带宽、功耗与量子效率下，传统帧式相机只能时间欠采样、被曝光拖出运动模糊、甚至饱和。互补视觉传感器（CVS）把视觉信息拆成两条互补通路：空间稠密但时间稀疏的长曝光 RGB 通路，以及时间稠密但空间稀疏的短曝光时空差分通路；两者合起来在宽动态范围内同时给出外观、结构与运动线索，使重建得以突破常规成像的极限。作者提出 CoGenRec：用曝光感知的外观建模与双向时间传播，把互补测量编码成多尺度时空特征，用这些特征约束视频扩散模型，并把特征注入 VAE 解码器以恢复隐空间压缩时丢掉的细节，从而把物理测量的场景保真度与学习到的视频先验的外观恢复能力拼在一起。一个框架统一了视频去模糊、高时间分辨率帧插值与 HDR 融合三类任务：在 SportsSloMo-CVS 上，相比最强通用基线分别提升 4.40 / 3.89 / 5.04 dB PSNR；在 129 个未见的真实 CVS 场景上也保持了良好的感知质量。",
      why: "互补传感器这类「双通路采样」设计的价值几乎全在重建端：两条通路谁补谁、在哪一层融合，直接决定上限。CoGenRec 的做法是把互补测量当作扩散模型的条件、同时把特征塞进 VAE 解码器补细节，而不是在像素域做事后融合——这对多曝光、多传感器、事件+帧的混合采集系统是可直接借用的分工：测得准的部分交给物理测量，丢掉的部分交给生成先验。"
    },
    {
      id: "x8gj-tvc3", no: 73, tier: "B", section: "physics", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Self-portrait of the focusing process in speckle: II. Gouy phase shift for defocus correction and pixel depth reassignment",
      titleZh: "散斑里的聚焦自画像 II：用 Gouy 相移做逐像素散焦校正与深度重指派",
      authors: ["Flavien Bureau", "Emma Brenner", "Naiara Korta Martiartu", "Elsa Giraudat", "Arthur Le Ber", "William Lambert", "Louis Carmier", "Aymeric Guibal", "Mathias Fink", "Alexandre Aubry"],
      venue: "Physical Review Applied", published: "2026-11-05", url: "https://doi.org/10.1103/x8gj-tvc3", doi: "10.1103/x8gj-tvc3",
      tags: ["散斑干涉", "Gouy 相移", "声速估计与像差校正"], primaryClass: "physics.med-ph",
      summary: "这是「用散斑做像差校正与混响补偿」三部曲的第二篇。用波探测非均匀介质时，波速的多尺度起伏同时带来两类麻烦：短尺度非均匀性产生背向散射回波，其随机干涉在波束成形图像上形成散斑；大尺度波速起伏则扭曲聚焦波前，在图像上造成像差。作者展示焦点的「自画像」如何随声速模型演化，并给出一个相当醒目的现象：当声速模型取到最优时会出现 Gouy 相移。这个极敏感的特征同时支撑两件事——(i) 为图像中每个像素单独优化声速模型；(ii) 在整个视场内做局部、精细的散焦补偿，从而压掉图像里的大部分像差。方法先在仿体与数值仿真上验证，再用于一位成像条件困难患者的在体肝脏数据：声速优化实现了像差的轴向补偿，并把每个单次散射回波按真实散射体位置做深度重指派。由于距离测量在诊断中常常是关键，这种波速优化不仅对超声、对其他基于回波定位原理的成像方法同样重要。",
      why: "组织内声速未知导致的散焦是超声定量化的老难题，常规做法是估一个全局平均声速、或者请「导引星」。这篇把 Gouy 相移当成焦点质量的内在标尺，做成逐像素的声速搜索——不需要额外硬件，也不需要已知点目标。对光声、OCT 这类同样依赖相干门/回波定位的模态，这套「用散斑自身判断聚焦好不好」的思路有直接迁移价值。"
    },
    {
      id: "boe-pam-beams", no: 74, tier: "B", section: "system", primaryTopic: "T09", topicTags: ["T09", "T02"], confidence: 0.72, score: 0.72, evidence: "mixed",
      title: "Joint simulation framework for evaluating non-diffraction beams in optical-resolution photoacoustic microscopy in scattering media",
      titleZh: "散射介质中光声显微的无衍射光束评测：光-声联合仿真框架",
      authors: ["Ximiao Yu", "Haiqi Zhang", "Zhixian Lin", "Simo Tian", "Yingying Chen", "Hui Gong", "Qingming Luo", "Xiaoquan Yang"],
      venue: "Biomedical Optics Express", published: "2026-11-03", url: "https://doi.org/10.1364/boe.613821", doi: "10.1364/boe.613821",
      tags: ["光声显微", "无衍射光束", "散射介质仿真"], primaryClass: "physics.optics",
      summary: "无衍射光束被引入光分辨光声显微（OR-PAM）以扩展景深，但它们在散射生物组织里到底还剩多少性能，此前缺乏系统评估。作者提出一个光-声联合仿真框架：光学部分用分形传播方法建模，声学部分用 k-Wave 仿真，考察散射造成的光束畸变如何影响 OR-PAM 成像。比较了高斯、Bessel、Airy、针状与液滴状 Bessel 五种光束，把光场分布与吸收体分布耦合生成初始声压，再用微球阵列与血管模型评估成像性能。结果显示散射越强，五种光束的差异越被放大：高散射介质中高斯与 Airy 照明图像明显退化，Bessel 与液滴状 Bessel 能更好地保住深层结构；Bessel 与针状光束成像距离长，但旁瓣明显。液滴状 Bessel 虽非各项光学传播指标最优，却在散射介质 OR-PAM 中取得较好的平衡。光束实测与碳纳米颗粒成像支持了仿真趋势，小鼠耳部血管成像展示了五种光束的在体表现。该研究为生物组织 OR-PAM 的照明光束选择与优化提供了参考。",
      why: "「用 Bessel/Airy 光束换景深」在显微里讲了很多年，但在散射组织里哪种光束还保得住深层结构，一直缺定量比较。这个框架把光学传播与声学检测串起来评，结论也实用：高散射下 Airy 崩得最快，液滴状 Bessel 折中最好。做在体光声、或任何要在散射组织里选照明光束的实验，可以直接拿它的比较表当起点。"
    },
    {
      id: "ao-coded-ct", no: 75, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.72, score: 0.72, evidence: "sim",
      title: "Three-dimensional residual projection completion for coded-aperture cone-beam computed tomography",
      titleZh: "编码孔径锥束 CT 的三维残差投影补全：只补缺失、不动实测",
      authors: ["Tianyi Mao", "Yushen Jiang", "Leijun Zheng", "Xu Ma", "Shujin Zhu", "Xiubin Dai"],
      venue: "Applied Optics", published: "2026-11-05", url: "https://doi.org/10.1364/ao.613760", doi: "10.1364/ao.613760",
      tags: ["编码孔径", "稀疏视角 CT", "投影域补全"], primaryClass: "physics.med-ph",
      summary: "编码孔径锥束 CT 通过遮挡一部分探测器-视角射线来降低 X 光剂量，但由此产生的交错缺失采样让直接体重建既费算力又易出伪影。作者提出投影域重建框架：用三维 U-Net 学习残差修正，在 Feldkamp–Davis–Kress（FDK）重建之前先把编码投影张量补全。网络输入是实测编码投影、基于插值的初始估计与二值孔径掩膜，只对未测量的样本预测有界残差修正，实测数据被严格保真；训练目标组合了缺失区域保真、接缝强度一致与接缝梯度一致三项，专门压编码孔径边界处的不连续。在 188 个投影体上的实验表明，所选损失组合改善了投影补全，重建结果接近参考 FDK 图像；38 个测试病例上重建与参考的平均 PSNR 为 44.6 dB、平均 SSIM 为 0.98。",
      why: "稀疏/编码孔径 CT 的常见做法是在图像域补，或者让网络在投影域「顺手」把实测数据也改掉——后者让结果不可解释、也无法回溯源数据。这篇的约束很干净：只在未测量处加有界残差，实测值一个不动，再用接缝一致损失压边界伪影。做任何稀疏采样重建时，「保实测 + 只补缺失」都该是默认设定，而不是可选项。"
    },
    {
      id: "ir-amenet", no: 76, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.65, score: 0.65, evidence: "mixed",
      title: "AME-Net++: adaptive mixture-of-experts for intelligent intraoperative 3D reconstruction",
      titleZh: "AME-Net++：自适应专家混合的术中三维血管重建",
      authors: ["Shi-Qi Liu", "You-Jun Zhang", "Xiao-Liang Xie", "Lin-Sen Zhang", "Xiao-Hu Zhou", "Xi-Yao Ma", "Zeng-Guang Hou", "Xin-Kai Qu"],
      venue: "Intelligence & Robotics", published: "2026-11-05", url: "https://doi.org/10.20517/ir.2026.39", doi: "10.20517/ir.2026.39",
      tags: ["稀疏 X 光投影", "专家混合", "术中导航"], primaryClass: "eess.IV",
      summary: "微创血管介入中，术中三维血管重建与准确的空间刻画对机器人手术导航的安全与精度至关重要。与依赖固定训练/测试划分的常规监督学习不同，基于投影的神经重建要在稀疏 X 光观测与对应的三维空间表示之间建立患者特异的映射。作者提出 AME-Net++：一个自适应专家混合网络，把特征感知、专家自适应协作与多尺度优化集成起来，从术中多视角 X 光投影重建三维结构。具体地，用自适应特征保持策略抑制投影噪声、同时保住血管结构的几何连续性；针对组织衰减异质与区域相关的结构变化，设计带可学习路由的并行专家混合架构，把局部特征动态分配给合适的专家子网，做区域自适应的精细表示学习；此外提出多尺度信息感知的复合损失，联合优化全局结构保真、局部密度一致与边缘细节保持。在公开数据集与自建动物介入血管数据集上，AME-Net++ 在二维投影合成与三维体素重建两项任务上都表现良好；重建血管中心线的平均误差为 1.5 ± 0.67 mm，说明主要血管走行被以有临床意义的空间精度保住。",
      why: "和 SPARC（八视角 X 光重建三维解剖）是同一条线上的工作，但更强调「患者特异、单次标定」：没有大规模配对数据，只能靠投影一致性自己约束自己。真正可借的是它的损失设计——全局结构、局部密度、边缘细节三路一起管，正好对应稀疏投影重建最容易出问题的三类伪影（拉丝、断层、边界糊）。1.5 mm 的中心线误差也给了个可对标的量级。"
    },
    {
      id: "ao-fringe-speckle", no: 77, tier: "B", section: "core", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Single-image phase retrieval method based on fusion coding of fringe and digital speckle patterns",
      titleZh: "条纹与数字散斑融合编码的单帧相位恢复",
      authors: ["Wenjie Li", "Yonglong Pan", "Guijie Liu", "Qiyu Lai", "Haowei Liu", "Yang Huang", "Zhaoguang Huang"],
      venue: "Applied Optics", published: "2026-11-06", url: "https://doi.org/10.1364/ao.613685", doi: "10.1364/ao.613685",
      tags: ["单帧结构光", "条纹级次", "散斑相关"], primaryClass: "physics.optics",
      summary: "结构光三维重建长期在速度与精度之间取舍。作者提出基于条纹图案与数字散斑融合编码的单帧相位恢复方法：先用 GD-DCUNet 模型（多分支空洞卷积提特征、残差融合机制、信息整合与分配策略）把条纹信息与散斑信息从一张融合编码图里分离出来；分离得到的条纹图交给新构建的 CSAS-UNet 预测包裹相位的分子项与分母项，分离得到的散斑图则通过与参考散斑图做相关运算来预测条纹级次。在极线、包裹相位与连通域构成的多重约束下，该相关运算显著缩小了采样点候选匹配点的搜索范围，从而稳健、快速地给出条纹级次。对比实验表明，该方法仅用单幅图像即可高精度恢复相位，在复杂表面与低纹理区域也保持了很好的稳定性与重建质量，具备工程应用潜力。",
      why: "单帧结构光的核心矛盾是「稠密条纹保精度」与「随机编码保级次」不可兼得。这篇不是折中，而是把两种编码叠进同一张图再用网络分离——等于一次曝光拿到两次曝光的信息。对动态场景三维测量（振动、旋转、活体）这是条便宜且工程化的路；分离网络与级次预测解耦的设计，也让换相机、换镜头时不必整体重训。"
    },
    {
      id: "ao-ghost-spad", no: 78, tier: "B", section: "efficient", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Time-optimized frame-filtered ghost imaging with pseudo-thermal light and a SPAD array",
      titleZh: "伪热光 + SPAD 阵列的按帧计数滤波鬼成像：把采集时间压下来",
      authors: ["V. S. Starovoitov", "N. D. Samoilenko", "V. N. Chizhevsky", "D. Mogilevtsev", "M. Perenzoni", "L. Gasparini"],
      venue: "Applied Optics", published: "2026-11-05", url: "https://doi.org/10.1364/ao.612408", doi: "10.1364/ao.612408",
      tags: ["鬼成像", "SPAD 阵列", "暗计数抑制"], primaryClass: "physics.optics",
      summary: "作者用一块 SPAD 阵列同时充当多像素「桶」探测器与成像相机来做鬼成像实验。实验用伪热光源，光强弱到 SPAD 的暗计数对成像产生明显的破坏作用。为压低暗计数对鬼影的影响、并减小图像中随机散斑结构的涨落，他们按每帧的计数个数对采集数据做滤波，再用短程滑动平均对鬼影平滑。合适的滤波器参数使获得高质量鬼影所需的数据采集时间显著缩短。",
      why: "鬼成像落地最现实的障碍就是「要多少帧」。这篇的答案朴素但有效：低光下暗计数不是均匀底噪，而是稀疏事件，按帧计数门限就能整帧剔掉；再让同一块 SPAD 阵列既当桶探测器又当相机，等于省掉一路光路与配准。做单像素/鬼成像低成本样机时，这个滤波几乎零成本，值得先试。"
    },
    {
      id: "2611.08288", no: 79, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Hierarchical Incremental Beta Splatting for Online Reconstruction",
      titleZh: "分层增量 Beta Splatting：边采集边重建的在线三维重建",
      authors: ["Linus Franke"],
      venue: "arXiv · cs.CV", published: "2026-11-05", url: "https://arxiv.org/abs/2611.08288", pdf: "https://arxiv.org/pdf/2611.08288",
      tags: ["在线 3DGS", "Beta 核", "LOD 层次"], primaryClass: "cs.CV",
      summary: "在线三维高斯泼溅要在采集过程中完成重建：每个关键帧只生成一次基元，且仅做几十次迭代优化，几乎没有机会修正糟糕的初始化或补齐细节；而高斯基元本身是「软」的，需要大量重叠才能形成实心表面。作者提出分层增量 Beta Splatting（HIBS），把 beta 核引入增量重建：其形状参数可在「类高斯的软剖面」与「平顶、近不透明的面元」之间插值，相当于一个几何置信度旋钮。置信度感知的生成策略用几何可观测性与多视角深度一致性来初始化不透明度与形状——几何可验证处生成实心基元，不可验证处生成软基元留待修正。在线致密化过程中，误差驱动重定位把失效基元回收利用到光度误差热点；beta 核的有界支撑带来精确的瓦片剔除与更快的栅格化，闭式的保形合并公式提供 LOD 层级，兼顾快速优化与实时渲染。在 Mip-NeRF 360 的 on-the-fly 协议下，PSNR 最高提升 0.8 dB，优化时间最多减少 40%。",
      why: "在线/流式重建的核心指标不是峰值画质，而是「只允许几十次迭代」时怎么不押错注。把核形状当作置信度来用，让没把握的地方先留软、后面再收——这个思路比单纯加迭代更对路；有界支撑带来的剔除与闭式 LOD 合并，也让实时性有了着落。做机器人/手持实时建图的可以对照它的 spawn 与 relocation 规则。"
    },
    {
      id: "2611.07613", no: 80, tier: "B", section: "efficient", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Towards Real-Time Full-Waveform LiDAR Transformers via Intensity-Guided Token Reduction and Physics-Aware Augmentation",
      titleZh: "实时全波形 LiDAR Transformer：强度引导的 token 裁剪与物理感知增广",
      authors: ["Kotaro Oishi", "Kazuma Ikeda", "Ryosei Hara", "Ryo Yoshida", "Mariko Isogawa", "Kentaro Yoshioka"],
      venue: "arXiv · cs.CV", published: "2026-11-05", url: "https://arxiv.org/abs/2611.07613", pdf: "https://arxiv.org/pdf/2611.07613",
      tags: ["全波形 LiDAR", "token 剪枝", "物理先验增广"], primaryClass: "cs.CV",
      summary: "全波形 LiDAR（FWL）把完整回波波形按直方图记录，保留多路径回波与弱信号等丰富反射特征，弥补常规 LiDAR 在雾雨、透明物体、低反射表面下的短板。但基于 Transformer 的 FWL 方法有两个瓶颈：低强度背景区域的冗余 token 带来高计算开销；标注数据稀缺导致泛化受限。作者利用 FWL 数据固有的物理结构同时解决两者：一是 FWL-ToPM，用强度分布做 token 剪枝与合并，有选择地减少 token 同时保住关键波形内容；二是 FWLAug，一种以正则化方式设计、保持波形结构的数据增强，保留每条射线的飞行时间波形与视锥几何，从而改善对未见场景的泛化。在 Ghost-FWL 基准上，FWL-ToPM 实现 8 倍以上加速并达到实时吞吐，同时比先前最优方法 F1 高出近 9 个点，是首个既实时又提精度的 FWL Transformer；FWLAug 在标准基准与未见场景的分布外测试集上均进一步提升性能。代码与分布外数据集已公开。",
      why: "「低强度区域的 token 大多没用」这个先验在瞬态/波形数据上几乎是白送的加速点，但很少有人把它做成可插拔的剪枝模块。8 倍加速叠加近 9 点 F1，说明在波形数据里物理先验比更大模型更值钱；配套的保结构增广也能直接搬到 SPAD/TCSPC 这类时序数据上。"
    },
    {
      id: "lpr-metalens-ip", no: 81, tier: "B", section: "system", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Reconfigurable Optical Image Processor Unit via Phase‐Programmed On‐Chip Metalens",
      titleZh: "可重构光学图像处理单元：用相位编程的片上超透镜做边缘检测与局部增强",
      authors: ["Tao Wang", "Yiming Zhang", "Tonghui Dou", "Ke Xu"],
      venue: "Laser & Photonics Reviews", published: "2026-11-05", url: "https://doi.org/10.1002/lpor.72187", doi: "10.1002/lpor.72187",
      tags: ["超透镜", "空间微分", "免训练光学处理"], primaryClass: "physics.optics",
      summary: "图像处理对信息提取、模式识别与知识获取至关重要。与电子学的数字图像处理相比，光学图像处理借助光传播的内在并行性，在吞吐、延迟与能效上有潜在优势。光学神经网络已被广泛用于特征提取与图像增强，但依赖数字域中大量数据驱动的训练与参数优化；相比之下，空间微分通过光传播本身就能为某些图像处理任务提供一条直接、免训练的路径。这类操作此前多靠自由空间波前整形实现，系统笨重且对失准敏感；集成纳米光子平台具备纳米级对准精度与晶圆级集成能力，但亚微米单模波导对波前工程的调控能力有限。作者提出一种光学图像处理单元：用可编程的输入相位，在同一个无源超透镜上选择一阶与二阶主导的空间响应；通过实验表征的多端口响应做重建，演示了八级灰度图像的边缘检测与局部对比度增强。",
      why: "把图像处理搬到光域，最现实的问题是「一块固定器件只能算一个算子」。这里用输入相位编程，让同一块无源超透镜在一阶/二阶微分响应之间切换——可重构、免训练、不需要非线性材料。对想做传感器端预计算（边缘先出、后端少算）的系统，这是比堆光学神经网络更轻的路线，也提示了「一个无源器件 + 可编程照明/相位」这套复用思路。"
    },
    {
      id: "2611.05510", no: 82, tier: "C", section: "tools", primaryTopic: "T10", topicTags: ["T10", "T03"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Fast and accurate false-alarm probabilities for linear detection statistics in Poisson noise",
      titleZh: "泊松噪声下线性检测统计量的快速精确虚警概率",
      authors: ["Maayane T. Soumagnac", "Eran O. Ofek", "Shachar Israeli", "David Glukhov"],
      venue: "arXiv · astro-ph.IM", published: "2026-11-03", url: "https://arxiv.org/abs/2611.05510", pdf: "https://arxiv.org/pdf/2611.05510",
      tags: ["虚警概率", "复合泊松", "开源工具"], primaryClass: "astro-ph.IM",
      summary: "在噪声数据里检测弱信号，往往要算检测统计量的显著性，也就是虚警概率。当底层噪声服从泊松统计——例如光子稀缺的天文图像这类低计数测量——这个计算并不简单，现有做法多依赖大量仿真去估检测阈值。作者给出泊松噪声下任意线性检测统计量虚警概率的精确且高效的解法：他们证明该检测统计量是复合泊松随机变量，从而可以用基于快速傅里叶变换（FFT）与 Panjer 递推的高效实现。方法在数值离散化意义下是精确的，相比仿真加速数个量级，并且能算出仿真无法触及的虚警概率。虽然动机来自低计数天文成像，该框架适用于任何泊松分布事件的检测问题。作者提供了开源的 Python 与 MATLAB 实现。",
      why: "光子计数成像里「这个亮点是真的还是噪声」最终都要落到虚警概率上，而大家通常用蒙特卡洛凑阈值。把统计量识别为复合泊松变量后直接 FFT / Panjer 递推，几个数量级的加速意味着可以逐像素扫阈值、生成整幅显著性图——做 SPAD、单光子成像或任何低计数检测时，这一步可以直接替换掉仿真，而且是精确解。"
    },
    {
      id: "lpr-itpd", no: 83, tier: "B", section: "system", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Self‐Powered Multi‐Dimensional Photodetector With Record Sensitivity and MHz Bandwidth via Hybrid Photoelectric and Electrocaloric Effects",
      titleZh: "自供电多维光电探测器：光电效应 + 电热卡效应把灵敏度与 MHz 带宽同时做上去",
      authors: ["Weifeng Zhao", "Fangkai Wang", "Jiajun Zhong", "Weijiang Yi", "Chengjie Fang", "Tianhao Yang", "Zongtao Lin", "Feng Qiu", "He Zhu", "Huizhen Wu", "Ning Dai", "Jiaqi Zhu"],
      venue: "Laser & Photonics Reviews", published: "2026-11-05", url: "https://doi.org/10.1002/lpor.72190", doi: "10.1002/lpor.72190",
      tags: ["强度-时间探测", "零偏压", "器件进展"], primaryClass: "physics.optics",
      summary: "能同时捕捉入射光强度与时间信息的多维强度-时间光电探测器（ITPD）是智能感知追求的方向，但现有主流方案基于电荷俘获或热释电效应，灵敏度与速度受限，难以进入高端应用。作者提出一种 ITPD：在范德华异质结与自发极化介质膜中分别集成光电效应与电热卡效应。介质表面诱导的正电荷层通过非平衡电荷转移实现零偏压光电流，电热卡效应则带来快速的电流淬灭；两者一起形成尖峰式响应，峰值探测率达到 5×10¹³ Jones（比现有基准高一个量级），帧率（即 1/上升时间）达到 0.25 MHz 的纪录水平。",
      why: "计算成像的上限常常由探测器决定：能同时给出强度与到达时间的阵列，才谈得上单曝光瞬态成像。这款器件把「响应」与「淬灭」拆给两条相互独立的物理机制（光电 + 电热卡），于是零偏压、高探测率与 0.25 MHz 帧率可以同时拿到，而不是互相牺牲。若后续能做成阵列，对无快门高速/瞬态成像是一个实质性的器件选项。"
    },
    {
      id: "lpr-oct-scope", no: 84, tier: "B", section: "system", primaryTopic: "T09", topicTags: ["T09"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Theranostic Endoscope for Three‐Dimensional OCT‐Guided Ultrafast Laser Ablation of Atherosclerotic Lesions",
      titleZh: "诊疗一体内窥镜：三维 OCT 引导的超快激光消融",
      authors: ["Anlan Shen", "Fan Yang", "Wei Yu", "Sen Yang", "Xinwu Lu", "Fu Wang", "Zhen Zhao", "Jigang Wu", "William Wijns", "Shengxian Tu"],
      venue: "Laser & Photonics Reviews", published: "2026-11-05", url: "https://doi.org/10.1002/lpor.72171", doi: "10.1002/lpor.72171",
      tags: ["内窥 OCT", "共路传输", "术中引导"], primaryClass: "physics.optics",
      summary: "超快激光手术通过非线性相互作用，能在多种生物组织中实现损伤极小的有效去除，对安全有效再通仍属未满足临床需求的钙化动脉粥样硬化病变是颇具前景的治疗方式；但临床落地受阻于缺少既能承受高峰值强度、又保持小型化与高性能的内窥镜。集成 OCT 还能进一步加分：OCT 可同时提供病变诊断与消融评估。作者报道一款紧凑的诊疗一体内窥镜（20 mm × 2 mm）：基于压电扫描的反谐振空芯光纤让超快激光与 OCT 光束共路传输，配合光纤球透镜与梯度折射率透镜组成的两级聚焦系统。该设计在 2.4 mm 直径的大视场内实现高效消融，同时以 2 体积/秒的速率做原位高分辨三维 OCT 监测。作者在人钙化斑块上验证了三维 OCT 引导超快激光旋切的概念，消融速率达 2.1 mm³/min。",
      why: "「看得见才敢切」——把 3D OCT 与消融激光塞进 2 mm 的探头里共路传输，是术中影像引导从术前规划走向「边看边做」的关键一步。2 体积/秒的实时三维反馈对扫描策略与在线重建延迟都提出硬约束，做内窥 OCT、或任何要在极小孔径里同时塞进成像与作用光束的系统，重点看它的共路与两级聚焦设计。"
    },
    {
      id: "dtg-4d", no: 85, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04", "T08"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Dynamic Thermal Gaussians: Multimodal 4D Gaussian Splatting",
      titleZh: "动态热高斯：把 RGB 与热成像一起放进 4D 高斯泼溅",
      authors: ["Rongfeng Lu", "LiFeng Lin", "Xiaobao Wei", "Quan Chen", "Ming Lu", "Yitian Xue", "Yaoqi Sun", "Yuhan Gao", "Anke Xue", "Chenggang Yan"],
      venue: "ACM Multimedia (MM '26)", published: "2026-11-06", url: "https://doi.org/10.1145/3767308.3835430", doi: "10.1145/3767308.3835430",
      tags: ["RGB-热融合", "4D 高斯泼溅", "动态场景重建"], primaryClass: "cs.CV",
      summary: "热成像是军事与热分析的关键手段，三维热重建又把温度分析从二维推到三维；但现有工作几乎都假设温度分布是静态的，忽略了真实环境里热传导随时间的演化。作者提出首个面向复杂场景的动态 RGB-热 4D 重建框架：把颜色外观、热观测与几何随时间共同建模，用一个多模态动态场景表示将两种模态锚定到共享的几何基底上，保证它们在时空形变下保持一致；再用多模态嵌入增强各模态的运动表达能力，并用多模态路由机制维护一组共享的多模态高斯基底，同时在各自细节丰富的区域自适应地「长出」模态专属的高斯以补足表达能力。工作还贡献了一个含高频温度变化的基准数据集，用于评测 4D 重建。实验显示该方法能同时高保真地重建外观与温度的时空演化，代码与数据集已公开。",
      why: "多传感器融合重建的难点不在「怎么拼」，而在两路观测的采样规律与失效模式完全不同：热像分辨率低、帧率低，但携带的是与可见光物理上解耦的温度场。这里用共享几何基底加模态专属高斯的双层结构，「一致的部分共享、不一致的部分分开」，比强行共享一套表示更符合物理；对 RGB-事件、RGB-深度、多曝光这类同样非同步、非同质的采集配置，这套路由思路可直接迁移。"
    },
    {
      id: "pmgs-mesh", no: 86, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Perception Over Geometry: Rethinking Gaussian Allocation in Mesh-based Splatting",
      titleZh: "P-MGS：高斯该分多少，看外观复杂度而不是网格密度",
      authors: ["Yuting Wang", "Yang Zhao", "Shanding Diao", "Penglin Wang", "Yuan Chen", "Wei Jia", "Ronggang Wang"],
      venue: "arXiv · cs.CV", published: "2026-11-05", url: "https://arxiv.org/abs/2611.07979", pdf: "https://arxiv.org/pdf/2611.07979",
      tags: ["3D 高斯泼溅", "网格编辑", "自适应表示"], primaryClass: "cs.GR",
      summary: "3D 高斯泼溅能做出照片级的新视角合成，但本身没有显式拓扑，想做几何编辑就得借助网格：现有做法把高斯绑定到三角面片上，通常给每个面片分配固定数量的高斯。然而决定外观重建所需表达能力的，是局部外观的复杂程度，而不是网格剖分的密度。作者提出 P-MGS，把外观建模与几何控制解耦：一方面用感知复杂度引导的分配策略，依据多视角观测估计出的表面外观需求来分配高斯；另一方面让高斯在优化时不受网格约束、之后再事后绑定回原网格，于是既保留了自适应细化的自由度，又保住了网格拓扑。网格编辑时，用局部仿射形变传递同步更新高斯中心与协方差，减少错位与悬浮伪影。实验表明，它以更少的高斯取得更好的平均新视角合成质量，同时网格编辑保持连贯。",
      why: "面片固定高斯数是一种「按几何均匀、按外观不均」的错配：平坦墙面上堆了过多高斯，细节处反而不够。把预算分给「看起来复杂」的区域，本质上是把表示能力当资源来调度——这与按信息量分配采样、按稀疏度分配测量的思路同源。做可编辑重建、或要把高斯塞进显存与带宽受限的端侧时，这套分配比反复调阈值更直接。"
    },
    {
      id: "ao-litho-dan", no: 87, tier: "B", section: "physics", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.72, score: 0.72, evidence: "sim",
      title: "Virtual metrology for process perturbation prediction in lithographic alignment marks using a physics-guided directed attention network",
      titleZh: "光刻对准标记的「虚拟量测」：从衍射响应反演工艺扰动",
      authors: ["Shiqing Lu", "Zhipeng Wu", "Yuejing Qi", "Jiani Su", "Hao Jin", "Xin Zhou", "Bokai Su"],
      venue: "Applied Optics", published: "2026-11-05", url: "https://doi.org/10.1364/ao.611381", doi: "10.1364/ao.611381",
      tags: ["衍射反演", "物理引导网络", "半导体量测"], primaryClass: "physics.optics",
      summary: "光刻对准标记的工艺扰动会改变多层膜轮廓、破坏标记对称性，进而带来对准位置的不确定度。对准位置偏差（APD）与晶圆质量（WQ）响应里其实编码了与工艺相关的信息，但要从这些响应里把扰动反演出来并不容易：这个逆关系是非线性的，而且各参数强耦合。作者把任务定义为「对准标记虚拟量测」——由成对的 APD/WQ 响应矩阵估计工艺扰动值，并提出物理引导的有向注意力网络 PG-DAN。其核心是衍射极限掩码注意力（DLMA）：把波长、衍射级次、传播、局域性与同一性等先验注入 APD/WQ 的注意力 logits，使模型依据物理上有意义的 token 关系、而不是无约束的数据相关性来聚合；有向解码器则在预测时遵循多层耦合的顺序。在严格耦合波分析（RCWA）数据集上，PG-DAN 取得平均 R² 0.999875、平均量程归一化 RMSE 0.34%、MAE 0.23%，误差低于常规神经逆模型。",
      why: "这是一个很干净的「测量即编码」样本：衍射级次与波长就是编码矩阵的行，工艺扰动是待解的隐变量，网络要做的是解一个条件数很差的逆问题。把衍射物理直接写进注意力掩码，等价于给逆问题加结构化先验——比事后正则更硬。任何「从衍射/干涉响应反演结构参数」的场景（散射测量、OCT 反演、衍射层析）都可以照搬这个把物理约束织进网络连接的做法。"
    },
    {
      id: "josaa-polar-fwd", no: 88, tier: "B", section: "physics", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.72, score: 0.72, evidence: "sim",
      title: "Shape and orientation in tissue polarimetry: a comparative forward-model study of collagen fibrils and cell nuclei across index contrast",
      titleZh: "组织偏振测量的前向模型：把「形状」和「取向有序」分开",
      authors: ["Nasrettin Yunus"],
      venue: "JOSA A", published: "2026-11-06", url: "https://doi.org/10.1364/josaa.616303", doi: "10.1364/josaa.616303",
      tags: ["偏振成像", "穆勒矩阵", "组织散射前向模型"], primaryClass: "physics.optics",
      summary: "组织偏振测量把散射光的偏振态当作微结构的指纹，但单一观测量无法把散射体的形状与其群体的取向有序度分开。作者用经洛伦兹-米理论校验的 T 矩阵方法，计算了软组织两类主导散射体——长椭球的胶原纤维与扁椭球的细胞核——的单次散射穆勒矩阵，并对每个矩阵做 Lu-Chipman 分解，得到线偏振度、延迟量与退偏度，在轴比、取向集中度、波长与相对折射率构成的参数网格上系统比较。结果显示：偏振度是弱判别量，在整个参数网格上只变化几个百分点；真正把对比度找回来的是延迟量与退偏度，而且两类散射体给出方向相反的签名——胶原的延迟量对取向有序度的响应约比细胞核强 2.3 倍，两者的退偏度随形状的依赖方向也相反。因此信号的取向敏感性本身就指向「纤维性」而非「核性」来源，这一判别方向与宫颈胶原重塑、轴突白质束的独立穆勒矩阵测量一致。前向模型经精确洛伦兹-米理论与全波 FDTD 双重校验，其输出（含新分辨出的退偏各向异性通道）可作为解释体组织偏振测量的单次散射核。",
      why: "偏振成像长期卡在「测得到、说不清」：穆勒矩阵的十六个数没有明确的组织学归属。这篇把归属做成了可控的前向实验——固定散射体形状、扫取向集中度，看哪个观测量在动。结论对做偏振门控与偏振去散射的人很实用：别盯着偏振度，延迟量与退偏度的取向敏感性才是区分纤维与细胞核的抓手；若要反演微结构参数，这也是一份经两种独立方法校验的现成字典。"
    },
    {
      id: "lpr-kk-kerker", no: 89, tier: "B", section: "physics", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.72, score: 0.72, evidence: "mixed",
      title: "Kramers‐Kronig Relation Empowered Kerker‐Like Effect for Macroscopic Objects",
      titleZh: "把空间 Kramers-Kronig 关系用到宏观物体：宽角度的后向散射抑制",
      authors: ["Yaqing Huang", "Yu Luo", "Xiaojun Hu", "Letian Guo", "Yuqi Wang", "Wei Liu", "Hao Shao", "Dexin Ye"],
      venue: "Laser & Photonics Reviews", published: "2026-11-05", url: "https://doi.org/10.1002/lpor.72181", doi: "10.1002/lpor.72181",
      tags: ["散射抑制", "空间 KK 关系", "多极调控"], primaryClass: "physics.optics",
      summary: "散射调控几乎贯穿光子学与波动物理的所有分支。以多极干涉为基础的 Kerker 效应及其推广，在亚波长尺度上塑造散射方向图非常有效，但它本质上是窄带的，而且面对电大尺寸的宏观物体就失效——多极模式数量一多，幅度与相位无法再同步控制。作者跳出「按预设多极干涉设计」的框架，提出一条空间 Kramers-Kronig（KK）设计路线，用于电大结构的后向半空间散射抑制，可在整个后向半空间实现宽角抑制，这是常规低阶多极工程难以进入的区间。工作给出了理论推导，用全波仿真验证，并通过实验测量确认性能。结果表明，空间 KK 关系可以通过材料层面的机制、自动且集体地调节众多多极通道，从而塑造电大散射体的散射；这一思路可推广到声波、弹性波与物质波等波系统。",
      why: "把 KK 关系从「频率域里实部虚部互为希尔伯特变换」搬到「空间域里折射率的实虚部配对」，就能让一大片多极通道自动协同——这是用解析约束替代逐模式优化的典型手法。对成像的启发在抗散射与杂散光抑制：若能把后向散射整体压下去，弱信号检测与穿透散射介质的对比度预算会直接改善。需要留一分怀疑的是它给出的是材料层面的设计路线，能否在可见光波段做成实际器件、宽带性能如何，还要看后续工作。"
    },
    {
      id: "lpr-phonon", no: 90, tier: "B", section: "physics", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Giant‐Amplitude Coherent Acoustic Waves in Cuprous Oxide",
      titleZh: "氧化亚铜里的巨幅相干声波：给纳米尺度成像换一个更强的声源",
      authors: ["Jia‐Wei Tan", "Hong‐Hua Fang", "Shuang Zhao", "Xiao‐Jie Wang", "Xiang Long", "Zhong‐Shan Jin", "Cong Hu", "Yu‐Dong Lian", "Gong Wang", "Hong‐Bo Sun"],
      venue: "Laser & Photonics Reviews", published: "2026-11-05", url: "https://doi.org/10.1002/lpor.72166", doi: "10.1002/lpor.72166",
      tags: ["相干声子", "超快光声", "纳米尺度成像"], primaryClass: "physics.optics",
      summary: "GHz 到 THz 频段的相干声波为纳米尺度成像与量子技术提供了有力手段，但在固体中一直受制于光激发产生的声学响应太弱：瞬态反射率调制通常低于 10⁻⁴。作者报道氧化亚铜（Cu₂O）单晶能高效产生相干声波，瞬态反射率调制接近 10⁻²，比常规水平高出约两个量级；这一强响应与形变势主导的产生机制相符，源于强电子-声子耦合。此外，Cu₂O 本身热导率低、立方结构高度对称，有利于抑制声子耗散、维持声波传播。借助该平台，作者用双脉冲激发演示了相干声波的干涉，并证明产生的应变波能以纳米级灵敏度映射 WS₂/hBN 范德华异质结中层间耦合的变化。这些结果确立了 Cu₂O 作为相干声子工程的光声介质地位，也为超快声光成像与调控提供了新的可能。",
      why: "光声与声光成像的信噪比几乎完全由「光能换多少声」决定，两个量级的提升不是优化而是换材料。真正值得注意的是最后那个实验：用双脉冲产生的应变波去读范德华异质结的层间耦合——这已经是一次无需扫描探针的纳米尺度内部界面成像。做泵浦-探测、光声显微，或想给亚表面结构找非光学对比机制的人，可以把 Cu₂O 当作声源基底来评估。"
    },
    {
      id: "oe-ife-markov", no: 91, tier: "B", section: "physics", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.72, score: 0.72, evidence: "sim",
      title: "Analytical Markov chain for spatiotemporal flux evolution of the inner filter effect in fluorescent media",
      titleZh: "荧光介质内滤效应的解析马尔可夫链：把瞬态光谱前向模型压到亚秒级",
      authors: ["Xuhui Yang", "Guofu Cao"],
      venue: "Optics Express", published: "2026-11-06", url: "https://doi.org/10.1364/oe.609369", doi: "10.1364/oe.609369",
      tags: ["内滤效应", "瞬态光输运", "快速前向模型"], primaryClass: "physics.optics",
      summary: "在多组分荧光介质中表征发射谱与衰减时间谱，是识别材料本征性质、优化探测器的关键；但次级内滤效应（IFE）引起的波长演化会扭曲这些可观测谱。蒙特卡洛光线追迹虽能模拟这种扭曲，却需要极长的计算时间才能积累足够的追踪统计量，难以支撑高维参数空间里的优化。作者基于时空解耦提出解析的马尔可夫输运模型：用拉普拉斯变换把连续域上的多重嵌套卷积积分转成离散的马尔可夫转移矩阵，使计算复杂度从随波长 bin 数 Nλ 与级联阶数 n 指数增长的 O(Nλⁿ)，降为线性的 O(Nλ+n)。所得代数解把瞬态衰减时间谱表示为 Gamma 波包的连续叠加，并能在亚秒时间内预测 IFE 导致的稳态波长谱畸变。在正交与前向面两种光谱仪构型下，计算谱线与蒙特卡洛仿真在线型上吻合。该模型可作为快速前向引擎，加速参数空间筛选、为探测器早期设计提供参考，并作为物理约束输入服务于事件顶点重建算法。",
      why: "内滤效应在荧光成像与荧光寿命测量里始终是个「越浓越不准」的隐形标定误差，通常靠蒙特卡洛硬算，或者干脆忽略。把嵌套卷积看成马尔可夫链、用拉普拉斯变换对角化，是把指数复杂度换成线性的经典一招。对做荧光分子层析、荧光寿命成像或探测器响应建模的人，这是一份可以直接嵌进反演循环里的快速前向算子——反演要迭代成百上千次，前向模型慢一个量级就等于方法不可用。"
    },
    {
      id: "mm-cage-llie", no: 92, tier: "B", section: "core", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.65, score: 0.65, evidence: "mixed",
      title: "Towards Color-faithful Low-light Image Enhancement via Adaptive Color Debiasing and Saturation Rectification",
      titleZh: "CAGE：低照度增强先把色偏修好，再谈提亮",
      authors: ["Zhichen Yang", "Rui Xu", "Yuzhen Niu", "Fusheng Li", "Hui Da", "Ri Cheng"],
      venue: "ACM Multimedia (MM '26)", published: "2026-11-06", url: "https://doi.org/10.1145/3767308.3835237", doi: "10.1145/3767308.3835237",
      tags: ["低照度增强", "颜色校正", "计算摄影"], primaryClass: "cs.CV",
      summary: "低照度成像常带色偏，根源在低信噪比与成像过程本身。近年低照度增强方法在亮度恢复上已做得很好，但忠实的颜色还原依旧困难，表现为整体色偏加上局部的欠饱和与过饱和。作者提出 CAGE——一个带自适应色偏校正与色域协调饱和校正的柱面颜色校正框架，用于色彩忠实的低照度增强。首先是 AdaLAB：一个柱面自适应 LAB 颜色空间，为均匀的颜色校正提供解耦且随图自适应的基；在此之上是 AdaCCT，一个带正逆变换的自适应柱面颜色变换，负责 RGB 与 AdaLAB 之间的相互转换，以及必要的色偏校正与饱和校正。前向变换在主干增强之前，通过色度平面的平移与缩放重排色度分布，压掉嵌入的色偏；逆变换则通过色域外的亮度补偿实现忠实的饱和校正。在多个基准上的实验显示，CAGE 的颜色还原更忠实，具体表现为色偏与饱和度异常下降，并在不同低照度增强主干上一致提升整体视觉质量。",
      why: "低照度增强的评测长期被 PSNR/SSIM 主导，而色偏这类「看一眼就知道错」的失真在指标上几乎不可见。这篇把问题拆成两段：先在柱面 LAB 里做与亮度解耦的色度重排，再在逆变换时用亮度补偿处理色域裁剪——这正是相机 ISP 里色度处理与色调映射的先后关系。对做 RAW 域计算摄影、或要评估「增强后颜色还像不像」的人来说，它提供了一个可插拔的前后处理模块，也点出了一类该被认真对待的失真。"
    },
    {
      id: "speckle-fm", no: 93, tier: "B", section: "system", primaryTopic: "T02", topicTags: ["T02", "T05"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Ultra-high precision speckle spectrometer enabling radio-frequency scale resolution of atomic spectra",
      titleZh: "把积分球当散射腔：散斑光谱仪把分辨率推到 6 飞米",
      authors: ["Gabriel Britto Monteiro", "Christopher Perrella", "Sarah K. Scholten", "Morgan Facchin", "Andre Nicholas Luiten", "Graham D. Bruce", "Kishan Dholakia"],
      venue: "Nature Communications", published: "2026-11-07", url: "https://doi.org/10.1038/s41467-026-78325-y", doi: "10.1038/s41467-026-78325-y",
      tags: ["散斑光谱", "多重散射腔", "计算光谱仪"], primaryClass: "physics.optics",
      summary: "散斑是随机干涉形成的颗粒状强度图样，天然把光谱信息编码进高维空间，因此散斑光谱仪以体积小、免对准、机械稳定见长；但它的分辨率长期停留在皮米量级。作者用积分球充当多重散射腔，让光在腔内经历大跨度分布的光程，从而放大光谱灵敏度。在 780 nm 处，器件实现 6 fm 分辨率、对应 1.3×10⁸ 的分辨本领，比此前实现提升约 80 倍。这一分辨率足以清晰分辨电光调制器产生的激光边带，反演出的边带功率与期望值偏差在 1% 以内；还可直接以散斑方式测出 ⁸⁵Rb D2 线的超精细结构，其透射谱与独立波长计参考测量相差不超过 3.7%。这些结果把散斑确立为超高精度光谱、射频光谱与微波光子学的平台。",
      why: "散斑光谱仪的核心是一张「随机但确定」的传输矩阵：定标一次，此后每测一张散斑图就是解一次线性逆问题。它的分辨率天花板本质上由有效光程差的动态范围决定，而积分球恰好用一个廉价器件把这个范围拉开——这是「用多次散射换分辨率」的清晰示范。做单像素/压缩感知光谱、散射介质标定的人值得关注两点：定标矩阵的条件数如何随腔体参数变化，以及飞米级分辨率下温度与振动漂移如何维持（文章靠机械免对准与差分读出）。若要把散斑编码从纯光谱推广到成像，这套光程设计思路可以直接借。"
    },
    {
      id: "bbnirs-abs", no: 94, tier: "B", section: "physics", primaryTopic: "T02", topicTags: ["T02"], confidence: 0.72, score: 0.72, evidence: "mixed",
      title: "From relative to absolute quantification of cytochrome c oxidase and hemoglobin in human tissue: a standalone broadband near-infrared spectroscopy (bbNIRS) framework",
      titleZh: "独立式宽带近红外：把「相对」浓度变成「绝对」浓度",
      authors: ["Fatemeh Tavakoli", "Hanli Liu"],
      venue: "Biomedical Optics Express", published: "2026-11-05", url: "https://doi.org/10.1364/boe.612014", doi: "10.1364/boe.612014",
      tags: ["扩散光学", "吸收散射分离", "导数域拟合"], primaryClass: "physics.optics",
      summary: "便携式宽带近红外光谱（bbNIRS）适合床旁组织监测，但单靠连续谱无法把吸收与散射分开，弱吸收体（如细胞色素 c 氧化酶 CCO）只能给出相对变化。作者提出一套模型约束的估计框架，同时反演氧合与脱氧血红蛋白、还原型与氧化型 CCO、水体积分数，以及散射幅度 a 与散射幂 b。框架由四部分组成：扩散理论前向建模、解析雅可比灵敏度分析、基于模型的光谱窗口选择，以及用一阶与二阶光谱导数抑制参数串扰的四阶段导数域拟合算法（ε-TetraDF）。在加入 1–10% 噪声的扩散理论仿真中，多数参数相对恢复误差小于 10%（10% 噪声下 [CCOred] 约 14%）；蒙特卡洛仿真中 [HbO]、[HHb]、[CCOoxi]、水分数、a、b 的平均相对误差小于 6%，[CCOred] 为 7.9%。健康成人前额在体测量给出 [HbO]=41.7 μM、[HHb]=19.3 μM、StO₂=68.3%、水分数 76.0%、[CCOtotal]=5.3 μM，均落在生理合理区间。",
      why: "这是散射介质定量反演的教科书式组合拳：前向模型（扩散近似）定结构、雅可比定灵敏度、光谱窗口选择定「哪些波长真有信息」、导数域拟合定抗串扰。特别值得记的是用二阶导数压参数串扰——吸收体的窄特征在二阶导上分得更开，而散射的幂律背景被压平，这比在原始谱上直接做最小二乘稳健得多。做 fNIRS、扩散光学层析或任何「多组分 + 强散射」反演的人，可以把这套「窗口选择 + 导数域」两步法搬过去；同时要清楚它的边界：点测量、单距离、扩散近似，深部组织与低散射情形仍需谨慎。"
    },
    {
      id: "pg-sdfnet", no: 95, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04", "T09"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Extraction of thin orthokeratology lens surfaces in spectral-domain OCT using prior-guided signed-distance regression",
      titleZh: "PG-SDFNet：用几何先验引导符号距离场，把 OCT 里的薄界面接上",
      authors: ["Hongbiao Xie", "Mengqi Li", "Peifang Xu", "Juan Ye", "Chunlei Yao", "Gangyong Jia", "Lin An"],
      venue: "Biomedical Optics Express", published: "2026-11-05", url: "https://doi.org/10.1364/boe.619830", doi: "10.1364/boe.619830",
      tags: ["神经隐式表示", "OCT 界面提取", "几何先验"], primaryClass: "physics.optics",
      summary: "从频域 OCT 图像中提取干燥、离体的角膜塑形镜（OK 镜）内表面很困难：目标是一条薄反射界面，受散斑噪声、信号衰减与反射伪影干扰，缺段会在径向视图之间留下空隙，因此「覆盖完整度」必须与「定位精度」一起考虑。作者提出 PG-SDFNet，把连续的符号距离场（SDF）回归与每张 OCT B-scan 自动生成的粗几何先验结合：先验通过输入端融合与先验引导的跳连调制注入网络，引导表面表示学习；标注轮廓提供稠密距离监督。数据覆盖 7 个 OK 镜品牌的 839 次采集、共 53,696 张径向 B-scan，其中单一品牌的 95 次采集（5,737 张标注 B-scan）用于开发与内部评测。在 19 次采集（1,140 张 B-scan）的测试集上，采集级平均召回 0.9405、Dice 0.4346，相比 SDF-Concat 在全部 19 次采集上召回更高、16 次 Dice 更高；单视图召回阈值 0.80 时径向完整度达 0.9029。",
      why: "薄层、低对比、强散斑的界面提取，是 OCT 类成像最常见的失败点，而失败方式往往不是「测偏」而是「断线」。把表面写成 SDF 连续场，等于把「这条线必须连续」从后处理约束变成表示本身的归纳偏置——这是神经隐式表示最实用的价值之一。再叠加一个由 B-scan 自动生成、并不精确的粗先验，作用是限定解的搜索域，而不是替网络做决定；这一点在 Dice 仅 0.43 而召回 0.94 的组合里体现得很清楚：方法选择了「先保证不断、再逐步收边」。做层析界面分割、内窥 OCT 或任何需要跨视图一致表面重建时，这套「连续场 + 粗先验」的结构比逐帧分割再拼接更稳。"
    },
    {
      id: "niraf-lsci", no: 96, tier: "B", section: "system", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.68, score: 0.68, evidence: "real",
      title: "Endoscopic NIRAF-LSCI multimodal system with pseudo-color visualization for parathyroid autofluorescence localization and tissue perfusion assessment: preclinical validation",
      titleZh: "一台内窥镜同时看自发荧光与散斑血流：甲状腺手术里的双通道验证",
      authors: ["Chang Cai", "Chuoqi Yang", "Wanyu Sun", "Qiye Wen", "Xiao Xiao", "Dianxin Zhou", "Zifeng Luo", "Chao Zheng", "Xuhui Geng", "Zhenhao Liang", "S Q Wang"],
      venue: "Lasers in Medical Science", published: "2026-11-06", url: "https://doi.org/10.1007/s10103-026-05092-z", doi: "10.1007/s10103-026-05092-z",
      tags: ["激光散斑对比成像", "近红外自发荧光", "术中灌注"], primaryClass: "physics.optics",
      summary: "甲状腺术后甲旁减多源于甲状旁腺（PG）被误伤或血供受损。近红外自发荧光（NIRAF）能准确找到 PG，却不给功能灌注信息；激光散斑对比成像（LSCI）能无标记、实时评估灌注。作者验证了一套集成 NIRAF 与 LSCI 的多模态内窥系统，在同一次成像中完成 PG 定位与血管评估，重点考察 LSCI 的灌注表现与伪彩半定量可视化的临床可用性。系统在 8 只 SD 大鼠上测试（以大鼠甲状腺这一同源血供组织作为灌注替代），在血供完整、部分阻断、完全阻断三种严格控制的在位条件下成像。伪彩图由标准化流程生成：时间激光散斑对比分析（tLASCA）算出血流指数、以基线锚定的 5–95 百分位联合归一化、再用 Jet 色图映射。术中探针式定量 NIRAF 用于验证荧光信号灶：PG 荧光强度 149.8±8.7 mV，显著高于甲状腺 93.8±8.0、气管 84.6±9.1、肌肉 66.3±10.4 mV（均 P<0.001），阳性与阴性预测值均为 100%，所有荧光灶无一假阳。随灌注下降散斑对比度单调上升，映射为连续的蓝—红实时伪彩灌注图；组织病理确认全部荧光组织均为 PG。",
      why: "散斑对比成像的物理很朴素——血流快则散斑模糊、对比度低；但要把它做成术中可用的定量图，难点全在标定与归一化：曝光时间与散斑相关时间是否匹配、不同组织的光学性质差异如何扣除、单帧噪声多大。这里用「基线锚定的 5–95 百分位联合归一化」把不同样本、不同光照拉到同一色标，是让半定量图在临床上可读的关键一步。做 LSCI、扩散相关光谱或任何「从统计量反演功能参数」的成像，可以把它当作标定流程的参考实现；同时要知道它目前只是 8 只动物的临床前验证，跨物种、跨组织的定量可比性尚未解决。"
    },
    {
      id: "m3isr-bench", no: 97, tier: "B", section: "benchmark", primaryTopic: "T10", topicTags: ["T10", "T04"], confidence: 0.65, score: 0.65, evidence: "sim",
      title: "M 3 ISR: A Multi-Modal Multi-View Benchmark for 3D/4D Gaussian Splatting and Feedforward Compression",
      titleZh: "M³ISR：为 3D/4D 高斯泼溅与压缩准备一个可控的多视图基准",
      authors: ["Xinhui Liu", "Lei Liu", "Zhenghao Chen", "Lebin Zhou", "Wei Wang", "Wei Jiang"],
      venue: "ACM MM Workshop · Rich Media with Generative AI", published: "2026-11-07", url: "https://doi.org/10.1145/3841458.3841537", doi: "10.1145/3841458.3841537",
      tags: ["高斯泼溅基准", "自由视点视频", "率失真评测"], primaryClass: "cs.CV",
      summary: "自由视点视频与交互渲染越来越依赖显式高斯表示，但表示体积、动态更新与计算开销限制了落地。现有多视图视频数据集虽提供真实拍摄内容，却难以把相机几何、表示效率与时间冗余的影响分离开。作者提出 M³ISR，一个面向 3D 与 4D 高斯泼溅的可控合成基准：含 5 组室内外场景共 25 个场景、两种相机/运动配置、6 路同步 1080p 视图，以及稠密真值标注（RGB、相机参数、深度、语义与实例分割、静态—动态掩码）。共享中心的相机设计有意分离角度视角变化，使新视角合成与表示效率可以被对照评测。基准分五条互补赛道：3DGS 合成、4DGS 合成、4DGS 流式传输、3DGS 压缩、4DGS 压缩。代表性基线显示静态重建质量差异不大，但表示存储差异显著；被评测的流式方法报告的训练或重建成本远高于对应的离线动态重建基线。作者还定义了 3DGS/4DGS 的前馈压缩任务，给出参考的率—失真表述与初步基线。",
      why: "高斯类方法的评测长期有个尴尬：真实数据集里「质量差异」常被场景复杂度与相机分布掩盖，做压缩与流式的人无法判断收益来自方法还是来自数据。合成基准加上共享中心相机，把角度变量单独拎出来，这是把对照实验做干净的常规手段，但在这个方向上还很少见。更值得注意的是那条基线结论——静态质量差不多而存储差很多，说明 4DGS 的瓶颈已经从「能不能重建」转向「能不能装进带宽与显存」。做高斯压缩、流式传输或端侧部署的人，可以直接拿它当率—失真评测的起点。"
    },
    {
      id: "tt4d-lift", no: 98, tier: "B", section: "tools", primaryTopic: "T10", topicTags: ["T10", "T04"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "TT4D: A Pipeline and Dataset for Table Tennis 4D Reconstruction From Monocular Videos",
      titleZh: "TT4D：先把球「抬」到三维，再切分——单目乒乓 4D 重建的数据与流水线",
      authors: ["Nima Rahmanian", "Daniel Kienzle", "Thomas Gossard", "Dvij Kalaria", "Rainer Lienhart", "Shankar Sastry"],
      venue: "ACM Multimedia (MM '26)", published: "2026-11-06", url: "https://doi.org/10.1145/3767308.3835475", doi: "10.1145/3767308.3835475",
      tags: ["单目 4D 重建", "轨迹提升", "体育数据集"], primaryClass: "cs.CV",
      summary: "作者发布 TT4D，一个大规模、高保真的乒乓球数据集：从单目转播视频重建出 140 余小时的单打与双打比赛，标注包括高质量相机标定、精确三维球位、球旋转、时间分段以及逐时三维人体网格，可用于虚拟回放、球员分析与机器人学习。规模与精度来自一条新的重建流水线。此前方法先用二维球轨迹把比赛切成单次击球片段，再做重建；但基于二维的时间分段在遮挡与视角变化下会崩掉，导致重建不可靠。作者把范式反过来：先用一个学习式提升网络把整条未分段的二维轨迹抬升到三维，再由这条三维轨迹可靠地完成时间分段。同一个提升网络还推断球旋转、处理不可靠的球检测，并在严重遮挡时恢复球轨迹。正是这种「先抬升」的设计，使其成为目前唯一能从通用视角单目转播视频重建乒乓球比赛的方法。作者用两项下游任务证明数据保真度：估计击球瞬间的球拍位姿与速度，以及训练比赛回合的生成模型。",
      why: "单目 4D 重建的常见死穴是把「分段」当成前处理——一旦分段错了，后面再好的重建也救不回来。这里把顺序倒过来，用三维轨迹反过来指导分段，本质上是让「更难但更鲁棒的量」去约束「更容易但更脆弱的决策」，这与先估计全局位姿再优化局部结构的思路一致。另外，140 小时带旋转与人体网格标注的规模，对做高速小目标跟踪、卷帘快门校正与「物理可信」生成模型的人都是稀缺资源；球旋转标注尤其难得，因为它需要从仅有二维投影的转播画面里被推断出来。"
    },
    {
      id: "mrf-reg-hybrid", no: 99, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Efficient Parallel Implementation of a 3-D MRF-Based Deformable Image Registration Algorithm in Medical Dynamic CT Imaging",
      titleZh: "把 MRF 形变配准拆给 CPU 与 GPU：混合调度换来 9 倍加速",
      authors: ["Miloud Chemam", "Mohamed Elbahri", "Chakib Mustapha Anouar Zouaoui", "Nasreddine Taleb"],
      venue: "Journal of Imaging", published: "2026-11-06", url: "https://doi.org/10.3390/jimaging12110555", doi: "10.3390/jimaging12110555",
      tags: ["形变配准", "马尔可夫随机场", "异构计算"], primaryClass: "physics.med-ph",
      summary: "配准是医学图像分析的基础环节，高分辨率与实时处理的需求让形变配准的算力压力越来越大，许多高精度方法因计算昂贵难以进入临床。作者针对用于动态 CT 的三维 MRF（马尔可夫随机场）形变配准算法提出三种加速策略：先用 OpenMP 把可并行部分在多核 CPU 上并行化；再实现完全基于 CUDA 的 GPU 版本；最后设计 CPU/GPU 异构混合版本，把计算任务在两种平台上优化分配。在 Learn2Reg 数据集、192×160×256 的图像上，混合方案整体性能最好：它把串行的图优化瓶颈策略性地留在 CPU，取得相对串行实现约 9 倍的加速，同时精度相当；而纯 GPU 方案受限于硬件利用率反而表现不佳，说明把 MRF 优化映射到大规模并行架构本身存在结构性困难。作者还提供了可视化配准过程与结果的图形界面。",
      why: "图割/MRF 这类离散优化在 GPU 上天生别扭：标签传播与图结构是串行的，能并行的只有能量计算与数据项。这篇文章的价值不在于「用了 GPU」，而在于老老实实报告了纯 GPU 版本因硬件利用率上不去而变慢，并给出「把串行瓶颈留在 CPU」的混合划分。任何想把迭代式逆问题（配准、层析重建、相位恢复里的图优化）搬到异构平台的人，都可以把它当作一张分工表：数据项并行、正则项的图结构串行、内存带宽决定实际收益。9 倍加速对临床工作流是有意义的量级，但要注意它对比的是串行基线，而不是已有的高度优化实现。"
    },
    {
      id: "cdi-dyn-support", no: 100, tier: "B", section: "core", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Dynamic Coherent Diffractive Imaging Using Only a Support Constraint in the Complex Plane",
      titleZh: "复平面上的有界增量：动态相干衍射成像只需一个支撑约束",
      authors: ["Yaocheng Tian", "Taichi Tsuchiya", "Karen Chen-Wiegart", "Horacio Espinosa", "Yuichiro Kunai", "George Barbastathis"],
      venue: "Optics Express", published: "2026-11-09", url: "https://arxiv.org/abs/2605.24250", pdf: "https://arxiv.org/pdf/2605.24250", doi: "10.1364/OE.606567",
      tags: ["相干衍射成像", "逐帧增量先验", "投影可行性"], primaryClass: "physics.optics",
      summary: "动态相干衍射成像要在连续采集的近场衍射图里同时解出随时间演化的相位，通常得靠物体的空间支撑域或强先验；一旦样品边界随时间扩张，支撑约束就失效。作者提出一个极简的动态先验：把相邻帧之间的联系写成乘性更新因子，只要求这个因子在复平面上落在一个有界扇形内——复角受限即相位增量有界，模长受限即振幅不放大（无源），一个约束同时给定了两件事。重建由此变成交替投影的可行性问题，只有两个算子：测量域的模量投影，与物体域的圆扇区投影。实验用空间光调制器作标定好的动态样品验证两例——空间范围不断扩张的反应–扩散相位图案，与累积相位达到 10π 的生长相位图案，重建相位轨迹均与真值吻合。作者随后不改参数把这套框架用于光聚合 3D 打印的原位监测，恢复了图案化蓝光引发聚合所产生的时空相位，使相位轨迹成为光化学系统辨识与过程控制的观测量。正式版见 Optics Express，预印本为 arXiv:2605.24250。",
      why: "传统 CDI 与叠层成像的支撑约束是「物体在空间上有限」，样品一长大一移动，约束就崩。这篇把「有限」从空间挪到时间轴：不限制物体在哪，只限制它一帧之间能变多少。扇形边界的妙处在于一箭双雕——幅角受限给出相位增量有界，模长受限（≤1）给出被动无源，物理上正是「薄样品在短时间内不会凭空增益光」。副作用是 10π 的累积相位也能顺着帧序无歧义地跟下去，无需事后解缠。做动态相位成像、原位监测（打印、刻蚀、电化学）的人值得注意两点：一是先验界与帧间时间间隔必须匹配，界太松约束失效、太紧跟不上快速演化；二是它只需要强度图，不需要参考臂或额外调制，这也是它能直接搬进「没人给得出物体支撑」的 3D 打印场景的原因。薄样品近似与近场采集几何仍是它的边界条件。"
    },
    {
      id: "cascaded-holo", no: 101, tier: "B", section: "physics", primaryTopic: "T04", topicTags: ["T04", "T06"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Misalignment-Robust Dynamic Cascaded Holography Accelerated by Deep Neural Networks",
      titleZh: "把层间错位写进波传播模型：抗失调的级联全息由神经网络加速",
      authors: ["Gyeongsu Jin", "Seokmin Kim", "Seung-Yeol Lee"],
      venue: "Laser & Photonics Reviews", published: "2026-11-08", url: "https://doi.org/10.1002/lpor.72192", doi: "10.1002/lpor.72192",
      tags: ["级联全息", "随机失调鲁棒优化", "相位型 SLM"], primaryClass: "physics.optics",
      summary: "级联全息结构能为光信息处理、加密与复用带来单层器件做不到的功能，但层与层之间的对准极为苛刻，实际系统几乎无法长期稳定工作。作者用商用相位型空间光调制器搭了一个动态级联全息平台，核心是一个把随机失调误差显式写进波传播模型的鲁棒优化框架：优化相位图案时不是对准一套理想几何，而是在大量随机错位条件下同时满足重建要求，因此得到的全息图在横向位移达约 100 像素时仍保持稳定的重建性能。在此之上实验演示了三类应用——鲁棒的全息秘密共享、波长选择性重建，以及高容量信息复用的高保真图像重建。为了压掉鲁棒优化带来的计算开销，作者再用深度神经网络去近似这一迭代寻优过程，大幅缩短相位图案的生成时间。",
      why: "级联全息长期停在演示阶段，卡点不在物理而在机械：两层 SLM 之间几十微米的漂移就足以毁掉重建。常见做法是加主动对准或事后标定，这篇换了思路——把失调当成模型的一部分，让优化器从一开始就在「一族可能的几何」上求解，于是容差变成了设计变量。这类「误差感知优化」在计算成像里越来越常见（散射介质标定、无透镜编码、端到端相机设计都能套），关键问题是：训练分布里的失调范围是否覆盖真实漂移，以及容差换来的重建质量损失有多大——文中给出的约 100 像素容忍度已足以覆盖商用 SLM 的机械公差。用网络替代迭代优化则是务实的工程选择，但要注意它的泛化边界仍在训练时的失调分布内。"
    },
    {
      id: "hs-endmember-dr", no: 102, tier: "B", section: "efficient", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Hyperspectral Image Data Reduction for Endmember Extraction",
      titleZh: "先剔掉混合像素：高光谱端元提取的自字典方法提速",
      authors: ["Tomohiko Mizutani"],
      venue: "SIAM Journal on Imaging Sciences 19: 2410–2445", published: "2026-11-02", url: "https://doi.org/10.1137/25m1829565", doi: "10.1137/25m1829565",
      tags: ["端元提取", "线性混合模型", "数据缩减"], primaryClass: "math.NA",
      summary: "端元提取要从高光谱图像里找出场景中各种材质的谱签名。近年的自字典方法精度很高，但计算代价随像素数迅速膨胀，大规模高光谱图像难以承受。作者改从数据侧下手：在线性混合模型加纯像素假设下，设计一种数据缩减技术，把「多个端元混合而成」的像素先剔除掉，只留下靠近端元的像素参与后续求解。文章给出了这一步的理论性质——缩减过程会保留那些与端元接近的像素，因此不会把真正需要的信息删掉；在此基础上提出「数据缩减 + 线性规划型自字典」的组合方法。数值实验表明，该方法在大幅降低原自字典方法计算时间的同时，端元提取精度没有损失。",
      why: "自字典方法的成本大头在字典规模，而字典规模由像素数决定；但纯像素假设本身已经告诉你，绝大多数像素是「混合物」，对定端元几乎没有贡献。这篇的价值是把这一直觉做成有理论保证的预处理：先几何式地筛掉明显不在端元附近的点，再解一个规模小得多的线性规划。对做高光谱解混、光谱库构建的人，这是典型的「先降规模再上重算法」路线，可与空间预分割、波段选择叠用。要留意的边界是它的两个前提：线性混合模型与纯像素假设。前者在强多次散射或粗糙表面会偏，后者要求每个端元在场景里至少有一个近乎纯净的像素——城市遥感通常成立，生物医学或密集成像场景则未必。"
    },
    {
      id: "2611.06020", no: 103, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "METRIC-GS: Selective Metric-Scale Estimation for 3D Gaussian Splatting",
      titleZh: "METRIC-GS：从重建自身的语义里读出米制尺度，证据不足就拒答",
      authors: ["Sooyeun Yang", "Jongseong Brad Choi"],
      venue: "arXiv · cs.CV", published: "2026-11-04", url: "https://arxiv.org/abs/2611.06020",
      tags: ["3DGS 尺度恢复", "语义先验", "选择性预测"], primaryClass: "cs.CV",
      summary: "三维高斯泼溅（3DGS）重建从运动恢复结构继承的是任意单位，没有尺度就无法测量，也无法把 AR 内容放进去。两条常规配方在真实拍摄上都很脆：在 5 个用卷尺量过层高的室内场景上，分位数式「地板到天花板」启发式的误差达 27%，而度量深度对齐在三个网络上误差为 35–71%。作者提出 METRIC-GS，一个面向真实室内照片的选择性尺度估计器：它从重建自身的语义内容读出尺度，并且同样重要的是——证据不足时明确拒答。做法是先用冻结的二维教师模型按可见性投票给高斯打标签，再把建筑与家具类别（门、桌、地板到天花板的间隙）的实例级尺寸先验用鲁棒最大似然融合，最后用一个内点质量检验把薄弱证据转成显式弃权，而弃权同时充当路由，把难例交给重量级度量模型。在 47 个带激光真值的 ScanNet++ 场景上（配置在公开评测前冻结），估计器单独工作就把启发式的平均误差从 21.1% 降到 16.6%（在其实际出手的 28 个场景上是 9.3%），每场景约 11 秒。单独使用时 MASt3R 仍更准（9.9%），但只把弃权样本路由给它，就能以少 60% 的调用次数达到接近全量调用的效果。可见性投票把可出手场景从 16 个提到 28 个且部署精度不变。方法原封不动用于作者自采的 13 段手机与无人机拍摄（MASt3R 在其中 12 次连自己的配准门限都过不了），在它出手的 5 段上全部改善、无一退化。作者还报告：一个当前的前馈度量模型在其训练混合分布内的基准上误差 2.3%，在从未见过的拍摄上则是 28–35%——已发表的度量尺度数字是最佳情况，不是部署估计。",
      why: "这篇的两个贡献都值得记。其一，尺度不在几何里而在语义里：门高、桌高、层高这些类别尺寸是唯一稳定的锚，把高斯按可见性投票绑定到二维教师的语义上，等于用「已知物体的大小」反解全局尺度，比拟合深度可靠得多。其二，也是更少见的一点——它把「不知道」当成一个合法输出。内点质量检验给出弃权，弃权又当路由器，于是系统在易例上快而准、在难例上把判断权交出去，这正是落地系统该有的形状。最后那个 2.3% 对 28–35% 的对照尤其该被引用：凡是拿单目度量模型做尺寸测量的工作，报的都是分布内数字，跨设备跨场景会掉一个数量级。做 3DGS 落地、AR 配准、单目测量的团队可以把它当作尺度环节的默认基线。"
    },
    {
      id: "2611.05359", no: 104, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04", "T10"], confidence: 0.68, score: 0.68, evidence: "real",
      title: "GSCV++: Lightweight 3D Gaussian Splatting Sequence Compression via Standard Video Codecs",
      titleZh: "GSCV++：不碰标准，把 3DGS 序列塞进现成视频编码器",
      authors: ["Qi Yang", "Yingzhan Xu", "Kai Zhang", "Li Zhang"],
      venue: "arXiv · cs.CV", published: "2026-11-03", url: "https://arxiv.org/abs/2611.05359",
      tags: ["3DGS 压缩", "视频编解码", "率失真"], primaryClass: "cs.CV",
      summary: "3DGS 序列要在产业里落地，压缩必须低复杂度、且能跑在现成硬件上，因此直接复用标准视频编码器是很有吸引力的一条路——难点全在「怎么把三维高斯映射成编码器友好的二维图」。GSCV++ 在三个环节同时改：预处理用能量自适应的帧间球谐交流分量降维（EA-SHDR），得到一个紧凑且时间上稳定的球谐特征空间，在去冗余的同时降低后续映射与压缩的数据量；三维到二维映射提出带先验的 Inter-MiniPLAS（P-MiniPLAS），通过先验权重推断与小尺度重映射生成平滑特征图，比原始 PLAS 与 Morton 扫描更适合视频编码器，同时保持低复杂度；实际压缩提出内容感知的广义压缩（CA-GC），对坐标图采用非均匀位深切分，并引入编码单元尺寸选择来控制压缩复杂度。实验显示，相比同类先进方法，帧内与帧间预测的率失真增益分别超过 20% 与 60%，二维图生成、编码与解码速度也更快，且不涉及编码标准的规范性改动。",
      why: "3DGS 的存储与传输已经是比「能不能重建」更硬的瓶颈，而重训一个端到端压缩网络在部署上没有优势——这篇的路线是「让标准编码器吃得下高斯」，工程上最容易过审。真正的方法含量在映射：PLAS 那类并行线性分配排序本是为压缩效率服务的，但它不考虑编码器的块划分与运动预测，所以作者用先验加权与尺度重映射把二维图做得更平滑、更符合编码器胃口。球谐交流分量的帧间降维则是另一处值得借的细节：高斯的视角相关颜色在时间上高度冗余，砍掉高阶交流分量几乎不损失重建质量，却直接减少要编码的数据量。要注意它对比的是同一类基于视频编码器的方案，率失真增益不能直接与端到端神经压缩横向比较；另外非均匀位深切分依赖场景坐标范围，跨场景泛化时的参数选择仍需调。"
    },
    {
      id: "2611.12038", no: 105, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.8, score: 0.8, evidence: "real",
      title: "DPGS-SLAM: Diffusion-Prior and Provenance-Aware Monocular Gaussian Splatting SLAM for Dynamic Visual Sensing",
      titleZh: "DPGS-SLAM：扩散先验补全遮挡背景，来源标签把生成内容挡在位姿优化之外",
      authors: ["Yifan Luo", "Takafumi Matsumaru", "Vibekananda Dutta", "Xin He"],
      venue: "arXiv · cs.RO", published: "2026-11-09", url: "https://arxiv.org/abs/2611.12038", pdf: "https://arxiv.org/pdf/2611.12038",
      tags: ["动态 SLAM", "扩散补全", "来源标注"], primaryClass: "cs.RO",
      summary: "动态物体让单目视觉 SLAM 的两件事同时受损：跟踪被运动物体污染，稠密建图被撕出空洞；而 3DGS-SLAM 建立在静态场景假设上，遇到运动物体就会失稳。直接把动态区剔掉能保住跟踪，却让被遮挡的静态背景既无观测也无约束。DPGS-SLAM 的做法是「先补再标」：用光流做运动发现、用 SAM2 做时序一致的掩膜传播划出动态区；对选定的关键帧，用微调过的扩散修补模型在被遮挡区域生成合理的背景外观，再由 Metric3D v2 从补全后的图像预测米制深度，初始化一批「临时」高斯基元。关键在来源标签（provenance）：生成的高斯与观测支撑的高斯分开记账，生成内容被排除在相机位姿估计与观测地图优化之外。当原先被遮挡的背景真正露出时，符合条件的生成基元被删除，改由真实 RGB 与该帧预测深度独立初始化。TUM RGB-D 上平均 ATE RMSE 为 1.2 cm、BONN RGB-D 上为 2.7 cm，与既有方法相当；在 StaDy4D 上仅用单目 RGB 就把平均 PSNR 比 WildGS-SLAM 提高 4.60 dB。",
      why: "这篇最值得借的不是「用扩散补背景」——这在今天已不新鲜——而是补完之后怎么办。生成内容一旦进了优化，就会靠自洽性把位姿拉偏：扩散模型编出来的纹理与几何会反过来解释观测，形成看起来很漂亮的错解。来源标签等于给地图上的每个高斯加了「证据等级」，位姿只由真实观测决定，生成物只在没有观测的地方占位，且随时可被真实观测替换。这套「临时占位 + 到期替换」的机制，比一味滤掉动态区实用：滤掉会丢背景，不滤会失真。要注意它的前提是全套二维先验（SAM2、Metric3D v2、扩散修补）都足够可靠，任一环节在低纹理或强反光场景失效时，临时基元就会变成系统性偏差；对实时性要求高的 SLAM，异步补全能否跟上帧率也是落地门槛。"
    },
    {
      id: "ptct-diffusion", no: 106, tier: "B", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "High-resolution parallel-translation CT reconstruction based on a patch-based adaptive-regularization-guided diffusion model",
      titleZh: "分块去噪 + 自适应正则：平行平移 CT 在截断投影下的高分辨重建",
      authors: ["Xuanheng Li", "Mingze Lv", "Jiahong Liu", "Yu He", "Yi Sun"],
      venue: "Optics Express", published: "2026-11-09", url: "https://doi.org/10.1364/oe.613003", doi: "10.1364/OE.613003",
      tags: ["平行平移 CT", "扩散模型", "接缝正则"], primaryClass: "physics.optics",
      summary: "工业无损检测里，大型板状构件转不动，旋转 CT 的机械系统又过于复杂，于是有了平行平移 CT（PTCT）——样品只做平移、不做旋转。代价是扫描范围有限、投影数据截断，重建出现混叠伪影。作者用扩散模型补这一段缺失信息：先用 SIRT 得到一个初值，把结构先验带进重建；再设计「拆分—重组」去噪模块（SRDM）做分块重建，并用位置编码作为条件引导，强化局部结构细节；同时提出自适应正则校正模块（ARCM），其中的接缝项（seam-based）与掩膜项（mask-based）随去噪阶段自适应调整，负责全局结构恢复与局部连续性。为验证方法，作者自建了一个含缺陷结构的 PCB 数据集。结果显示，方法在整体重建可靠的同时，能把缺陷区域的细微结构恢复出来。",
      why: "扩散先验做不完备数据重建已很常见，难的是「整图先验」与「分块计算」之间的矛盾：分块能省显存、能并行，但每个 patch 单独去噪会破坏跨块连续性，接缝本身就成了假结构。这篇的解法是把接缝与掩膜写成可调正则项，并让权重随去噪阶段变化——早期管全局骨架，后期管局部细节，这比固定权重的后处理拼接更贴合扩散的去噪动力学。PTCT 这个几何也值得关注：只用平移不要旋转台，是大尺寸平板件在线检测的刚需，而它的截断投影恰是「先验比算法更要紧」的典型场景。可质疑处在于自建 PCB 数据集的规模与缺陷类型覆盖面，结论能否外推到金属焊缝、复合材料分层等其他材料，还需要更多验证。"
    },
    {
      id: "2611.12716", no: 107, tier: "C", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Spaghetti Splatting: Differentiating Curvilinear Dirac Masses via Convolution",
      titleZh: "Spaghetti Splatting：把曲线当图元，用卷积让线上的狄拉克质量可微",
      authors: ["George Shramko", "Shrisudhan Govindarajan", "Rudy Lam", "Yizheng Xie", "Daniel Rebain", "David B. Lindell", "Andrea Tagliasacchi"],
      venue: "arXiv · cs.CV", published: "2026-11-09", url: "https://arxiv.org/abs/2611.12716", pdf: "https://arxiv.org/pdf/2611.12716",
      tags: ["曲线图元", "EWA splatting", "体渲染"], primaryClass: "cs.CV",
      summary: "生产系统里的三维几何是点、线、三角形这类图元，渲染硬件就是为它们优化的；但要反过来从图像里学出这些图元很难——它们都是定义在无穷小位置上的狄拉克质量，无法直接体渲染求导。EWA splatting、泊松重建与 3DGS 的解法本质相同：把狄拉克质量与一个低频核做卷积，使它变成可积、可微的团块。作者指出这个配方可沿两个轴推广——核的选择与图元的选择——点和三角形都已被充分研究，曲线还是空白，于是提出 Spaghetti Splatting：用折线逼近曲线，使折线的卷积收敛到连续曲线的卷积；逐段体渲染，并保证相邻段在接点处合成时不重复计数；为提速，对每段线性化相机投影，这套线性化也允许使用高斯以外的核（如 Beta 核）。由于点是长度为零的曲线，该表示是 3DGS 的严格超集：在一般场景上与当前最优方法相当，在线状几何上超过专用方法，原生支持抗锯齿，并能生成可直接用于物理仿真的长连通股线。",
      why: "这是一篇讲「表示」的文章，价值在于把 splatting 的通用配方讲清楚：图元是狄拉克质量，必须卷积低频核，而核与图元这两个自由度可以独立替换。理解这一点，3DGS 就不再是「高斯」的专利，而是一族方法的特例。曲线图元的工程难点作者都点了：一是接点处的重复计数，相邻段各自贡献会在线段连接处堆积能量、表现为亮斑；二是逐段投影非线性的计算代价，用逐段线性化换速度。对做毛发、线缆、植被、血管、纤维增强材料的人，这比继续堆高斯数量更对症；「点是零长度曲线」的说法还提供了一个干净的一致性检验。要留意它仍是离线优化框架，段数增加后光栅化与梯度累积的开销会上升，而文中的「有竞争力」是在一般场景上说的，并非全面超越。"
    },
    {
      id: "pol3d-color-dispersion", no: 108, tier: "B", section: "physics", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Polarimetric 3D reconstruction of colored targets based on narrowband multispectral dispersion constraints and chromaticity-based desaturation",
      titleZh: "彩色目标的偏振三维重建：色度解耦反射率，色散约束解折射率",
      authors: ["Zhe Wang", "Haoyang Wu", "Yong Tan", "Ye Zhang"],
      venue: "Optics Express", published: "2026-11-09", url: "https://doi.org/10.1364/oe.618751", doi: "10.1364/OE.618751",
      tags: ["偏振三维", "本征图像分解", "柯西色散"], primaryClass: "physics.optics",
      summary: "偏振三维重建的前提是表面折射率与反射率均匀，而彩色目标的反射率在空间上并不均匀，这会让天顶角估计产生系统性偏差、方位角消歧随之失效，最终形状被拉歪、细节丢失。作者针对彩色朗伯（或近似朗伯）电介质目标提出一套组合方案。先用窄带多光谱成像系统采集目标在多个光谱通道的偏振图像，用色度梯度约束的本征图像分解剥离反射率的空间非均匀性，还原仅由几何调制的明暗分量，从根上消除颜色对法向估计的干扰。再把柯西色散方程引入，刻画折射率随波长的变化，构建天顶角与色散系数的联合反演模型——把单通道下的欠定问题变成多通道的联合约束估计，从而无需已知折射率先验就能定出天顶角。最后用去饱和后的干净明暗法向作方向约束，通过矢量角一致性筛选消除方位角二义性，再做平滑正则优化，用泊松积分重建三维面形。自然光、单视角下的实验表明，对反射率非均匀的彩色电介质物体，精度显著优于单光谱通道方法。",
      why: "偏振三维的老问题一直是「两个未知数、一个方程」：反射率未知就分不清「暗」是几何背光还是材质本身暗，折射率未知就分不清偏振度对应哪个天顶角。传统做法靠假设均匀或额外标定，这篇把两个未知数分别交给两个物理维度解决：反射率交给色度，颜色不随几何变、明暗随几何变，本征分解天然可分；折射率交给色散，同一材料在不同波长下 n 不同，多通道就多出方程。妙处在于它把多光谱用成了「多方程」而不是「多颜色」，这在偏振成像里是很少见的用法。边界也清楚：朗伯假设、单视角、需要窄带滤光或快照多光谱相机；镜面反射与次表面散射强的目标（皮肤、釉面、蜡质）不适用。做偏振三维、材质识别、文化遗产数字化的人值得一读。"
    },
    {
      id: "pol-display-ir", no: 109, tier: "B", section: "system", primaryTopic: "T05", topicTags: ["T05", "T08"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Snapshot Polarimetric Display Inverse Rendering",
      titleZh: "屏幕当光源、偏振相机当传感器：桌面单帧完成材质反解",
      authors: ["Seokjun Choi", "Yunseong Moon", "Kaizhang Kang", "Hoon-Gyu Chung", "Jin-Nyeong Kim", "Giljoo Nam", "Seung-Hwan Baek"],
      venue: "ACM Transactions on Graphics 45(6): 1–13", published: "2026-11-09", url: "https://doi.org/10.1145/3842531", doi: "10.1145/3842531",
      tags: ["单帧逆向渲染", "偏振 BRDF", "显示—相机系统"], primaryClass: "cs.GR",
      summary: "逆向渲染要在单帧内解出法向、反照率、粗糙度与金属度，信息量天生不够，因此以往工作分别在时间调制、光谱编码、偏振几个维度上加信息。作者提出「偏振显示逆向渲染」：用一块 LCD 投影线偏振的 RGB 二值图案作为可控光源，再用一台加装四分之一波片的 RGB 偏振相机，单次曝光就采到彩色偏振测量。一个前馈 Transformer 把这些测量直接映射到逐像素的法向、反照率、粗糙度与金属度。训练数据不足是这类工作的通病，作者用生成式流形把少量实测偏振 BRDF 扩增成可用训练集。在真实桌面装置上的实验显示，跨多种场景的逆向渲染精度优于既有方法。",
      why: "这篇工程味道很浓，但思路值得抄：它不是「更好的网络」，而是重新分配单帧的信息预算。二值图案经 LCD 偏振投影后，等于同时给了结构光（空间编码）与偏振（角度编码）两种线索，而四分之一波片让相机一次拿到完整的彩色偏振测量——空间、偏振、颜色三个维度叠在一帧里，把欠定问题推到近乎可解。用生成式流形扩增实测偏振 BRDF 也是务实之举：真实偏振反射数据极难采，纯合成数据又不够真，在两者之间插值比纯合成靠谱。需要提醒的是装置依赖：它要能显示偏振图案的 LCD 与偏振相机，普通屏幕加普通相机无法复现；「桌面工作流」这个定位也意味着工作距离与视场都很受限，不是通用室内重建方案。"
    },
    {
      id: "2611.10413", no: 110, tier: "C", section: "core", primaryTopic: "T05", topicTags: ["T05"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Frequency-Structure Complementary Modeling for Hyperspectral Image Fusion",
      titleZh: "频域与结构互补：高光谱融合网络让局部聚合随结构自适应",
      authors: ["Song Qiya", "Tian Siyu", "Li Shutao", "Dian Renwei", "Sun Long", "Liu Jinyang"],
      venue: "arXiv · cs.CV", published: "2026-11-07", url: "https://arxiv.org/abs/2611.10413", pdf: "https://arxiv.org/pdf/2611.10413",
      tags: ["高光谱融合", "结构张量", "频域注意力"], primaryClass: "cs.CV",
      summary: "高光谱与多光谱融合的目标是同时拿到高空间分辨率与高光谱保真度。现有方法多依赖卷积聚合或注意力做空谱交互，但作者指出两个短板：常规的特征域注意力并不显式刻画沿空间 token 与隐通道坐标的变化模式；空间共享的局部算子又缺少随结构异构性调整邻域聚合的灵活性。为此提出频率—结构互补建模网络 FSCM-Net，把频率感知的依赖学习与结构自适应的局部精修耦合起来。空间—光谱频率校准注意力（SSFCA）模块用傅里叶交互后的 query-key 表示构建空间 token 亲和度，并在沿学习到的通道坐标做输入条件化频域滤波之后构建隐通道亲和度，隐通道响应再经一个共享增益校准后与空间 token 响应合并。结构相干动态特征融合（SC-DFF）模块把多光谱特征的正则化结构张量线索与上下文调制的高光谱细节表示结合，生成随通道与位置变化的聚合核，使局部精修能区分平滑区、边缘与纹理，同时保持光谱保真。两个模块在多尺度编解码器中渐进集成。在两个模拟基准与一个真实遥感数据集上，空间细节重建与光谱保持均优于代表性融合方法。",
      why: "高光谱融合的核心矛盾是「细节来自谁、光谱谁来守」，这篇的两个模块正好对应这两件事：SSFCA 在频域里找依赖，避免空间注意力在平坦区被噪声主导；SC-DFF 用结构张量给出各向异性线索（边缘方向、纹理强弱），让聚合核不再空间共享。值得记的是它对「常规注意力不显式建模坐标轴变化模式」的批评——这在高光谱里确实成立，因为光谱维的相关结构与空间维完全不同，混在一个注意力里会互相稀释。实证上仍是常规配置（两个模拟基准加一个真实遥感数据集），提升幅度与消融的完整性要回原文看表；另外结构张量取自多光谱图像，当多光谱本身分辨率不足或存在配准误差时，动态核会把这些误差放大。做 pansharpening 与 HSI-MSI 融合的人，可以把它当作「结构先验 + 频域注意力」的组合范式参考。"
    },
    {
      id: "lc-axicon-holo", no: 111, tier: "B", section: "system", primaryTopic: "T06", topicTags: ["T06", "T07"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Large‐Depth‐of‐Focus and High‐Quality Layer‐Based Holographic 3D Display System Based on Liquid Crystal Axicon",
      titleZh: "液晶轴棱锥把焦深拉长一倍：分层全息在 2 cm 连续焦段内清晰成像",
      authors: ["Fan‐Chuan Lin", "Qian Huang", "Yi‐Long Li", "Rui‐Yi Zhao", "Qiong‐Hua Wang", "Jiang‐Hao Xiong", "Di Wang"],
      venue: "Laser & Photonics Reviews", published: "2026-11-08", url: "https://doi.org/10.1002/lpor.72201", doi: "10.1002/lpor.72201",
      tags: ["分层全息", "液晶轴棱锥", "焦深扩展"], primaryClass: "physics.optics",
      summary: "分层（layer-based）全息显示靠「离焦随深度变化」提供深度线索，但系统焦深有限，能清晰成像的轴向范围很窄，这是分层方案的核心瓶颈。作者的思路是硬件与算法一起改：硬件上，基于无衍射贝塞尔光束的产生原理设计了一片液晶轴棱锥，用它把焦深撑开；软件上，提出多平面全息优化方法压制层间边界串扰，与液晶轴棱锥配合，实现大焦深、高质量的分层全息三维重建。系统由加载高质量全息图的 SLM 与特制液晶轴棱锥构成，在 2 cm 的连续焦段内完成重建，相比已报道的大焦深系统提升两倍以上。作者认为这有助于把全息显示推向工业、教育与娱乐场景。",
      why: "全息显示的分层方案一直卡在「层数—焦深—串扰」的三角里：层多了算力吃不消、层少了深度不连续，焦深不够则只有焦面附近清晰。这篇的巧处是用一片液晶轴棱锥把「焦深」这个自由度从算法侧挪到器件侧——贝塞尔光束本身无衍射、轴向强度近乎不变，正好补上 SLM 焦深短的短板，算法只需专心处理层间串扰。2 cm 连续焦段对桌面级全息显示是可用量级，但也要看清代价：轴棱锥是额外一片有源液晶器件，会带来偏振依赖、驱动电压与装调公差问题；文中比较的是「已报道的大焦深系统」，不是与多平面纯算法方案的公平对比。做全息显示、AR 近眼、光场三维的人可以把它当作器件—算法协同设计的范例。"
    },
    {
      id: "2611.12667", no: 112, tier: "C", section: "efficient", primaryTopic: "T06", topicTags: ["T06", "T04"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Stochastic Multilevel Sampling for Inverse Problems via Coarse-Space Identifiability",
      titleZh: "小样本也能可靠更新：多尺度随机采样让逆问题每次迭代更省",
      authors: ["Zichao Wendy Di"],
      venue: "arXiv · math.NA", published: "2026-11-09", url: "https://arxiv.org/abs/2611.12667", pdf: "https://arxiv.org/pdf/2611.12667",
      tags: ["随机采样", "多重网格", "病态反问题"], primaryClass: "math.NA",
      summary: "只采样一部分数据能降低逆问题每次迭代的开销，但更新会变得不可靠。作者研究「随机多尺度采样」：在一组由粗到细的校正空间层级上计算更新，核心直觉是——一个小样本即使不足以支撑细网格更新，也往往足以支撑可靠的粗网格更新。对二次型目标函数，作者给出了校正量能降低全数据目标函数的条件。在 CT 与周期去模糊的小批量实验中，该方法的重建精度优于同配置的单层方法；在一个条件数随图像维度恶化、投影角度数固定的 CT 精化任务里，单层方法的误差随维度增大而上升，而深层级方法能维持甚至改善精度，并在相同的前向/伴随算子调用次数下超过全数据单层优化。这些增益在测试的各类局部求解器下都成立，并随问题病态程度加深而更明显。",
      why: "这篇文章没有新网络、没有新数据集，讲的是一件很基础但常被忽略的事：小批量带来的噪声对不同尺度的分量影响完全不同。粗尺度分量由低频主导，少量投影就能约束住；细尺度分量需要更多角度，小批量下更新方向几乎全是噪声——所以「少采样」不该一刀切，而应按尺度分配预算。这与多重网格、多分辨率优化的直觉一致，但作者把它做成了带条件的随机方法，并给出误差随维度增长的实证。对 CT、层析等大规模反问题里「算力不够只能小批量」的实践者，这是可直接落地的一条：把预算花在粗层，细层少动。局限是理论保证主要针对二次目标，非线性算子（如相位恢复、非线性扩散）上的收敛性还没被覆盖。"
    },
    {
      id: "2611.11814", no: 113, tier: "B", section: "system", primaryTopic: "T07", topicTags: ["T07", "T04"], confidence: 0.68, score: 0.68, evidence: "real",
      title: "Lensless single-pixel imaging through dynamic coded-aperture illumination",
      titleZh: "用二值掩模相干传播出灰度照明：无透镜单像素成像的照明设计空间",
      authors: ["Yuhan Guo", "Shilei Li", "Tong Zhou", "Liming Li"],
      venue: "arXiv · physics.optics", published: "2026-11-09", url: "https://arxiv.org/abs/2611.11814", pdf: "https://arxiv.org/pdf/2611.11814",
      tags: ["单像素成像", "编码孔径照明", "无透镜"], primaryClass: "physics.optics",
      summary: "单像素成像的分辨率与信噪比很大程度上取决于照明图案的统计特性，但要在实验中自由产生各种照明场并不容易。作者搭了一套「动态编码孔径照明 + 单像素探测」的无透镜单像素成像系统：用 DMD 的二值掩模，经相干传播直接生成定制的灰度强度场，既不需要中继投影光路，也不需要靠时间上的灰度合成（多帧平均）来拼灰度。他们系统比较了六种目标场配置——均匀场、瑞利散斑、瑞利平方散斑，以及稀疏度 p=10%、5%、1% 的稀疏二值场——在二值与灰度两类物体上的表现，重建分别用强度相关法与带非负全变分正则的方法。结果显示「最优照明」取决于物体、重建算法与评价指标三者的组合，没有普适最优。作者认为这套「快速二值调制 + 可编程灰度照明 + 单像素读出」的组合，为无透镜计算成像以及光学编码与重建的联合设计提供了一个灵活的实验平台。",
      why: "单像素成像的文献里，算法（全变分、深度学习）远多于「照明该长什么样」，而照明统计恰恰决定了测量矩阵的性质。这篇的价值是把照明当成一等公民来做对照实验，而且给出一个不太讨喜但重要的结论：不存在普适最优照明——散斑照明在稀疏物体上加全变分效果好，均匀场在灰度物体上反而稳，指标从 PSNR 换成 SSIM 排序还会变。这对「端到端联合设计编码与重建」是个提醒：训练集与评价指标一旦定下，最优编码也就被绑死了，跨场景迁移要重新设计。技术上「DMD 二值掩模经相干传播直接得到灰度场」很实用，绕开了灰度调制需要多帧或高帧率 DMD 的限制，代价是灰度场形状受传播距离与掩模相关性的约束，不能任意指定。"
    },
    {
      id: "modalformer-llie", no: 114, tier: "B", section: "core", primaryTopic: "T08", topicTags: ["T08"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "ModalFormer: Multimodal Transformer for Low-Light Image Enhancement",
      titleZh: "ModalFormer：把九种辅助表征喂进跨模态注意力做暗光增强",
      authors: ["Alexandru Brateanu", "Raul Balmez", "Ciprian Orhei", "Codruta Ancuti", "Cosmin Ancuti"],
      venue: "Journal of Imaging 12(11): 566", published: "2026-11-09", url: "https://doi.org/10.3390/jimaging12110566", doi: "10.3390/jimaging12110566",
      tags: ["暗光增强", "跨模态注意力", "辅助表征"], primaryClass: "eess.IV",
      summary: "暗光图像增强（LLIE）的困难在于噪声、细节丢失与对比度不足三者纠缠。近年方法多只在 RGB 像素上做变换，忽略了其他视觉模态提供的上下文。ModalFormer 从输入 RGB 派生出九种辅助表征，框架由两部分组成：跨模态 Transformer（CM-T）负责在恢复退化图像的同时融合多模态信息；若干辅助子网络负责多模态特征的重建。CM-T 的核心是跨模态多头自注意力（CM-MSA），它把 RGB 数据与模态专属特征——深层特征嵌入、分割信息、几何线索、颜色信息——融合起来，生成信息更丰富的混合注意力图。在多个基准数据集上，ModalFormer 取得了暗光增强的最优性能。",
      why: "暗光增强做到今天，纯 RGB 端到端已接近饱和，增量只能来自额外信息。这篇的路线是零成本外部信息：不引入红外或事件相机，而是从输入自己派生九种表征（深度、分割、色度等）。好处是部署简单、不需要多传感器配准；代价是这些表征本身由 RGB 估计而来，在极暗条件下并不可靠——噪声会被「派生」成结构，再被网络当作先验强化，形成自我确认的伪细节。CM-MSA 用混合注意力图融合异构模态，是合理的设计；但九个辅助子网络的推理开销在移动端基本不可接受。读它时建议重点看两处：极暗（低于 0.1 lux）场景的对比，以及辅助表征在噪声下的鲁棒性消融——这两点最能判断「自派生先验」这条路到底能走多远。"
    },
    {
      id: "2611.10665", no: 115, tier: "C", section: "physics", primaryTopic: "T08", topicTags: ["T08", "T05"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Physically Guided TeX Generation for Low-Light Visual Tasks",
      titleZh: "从可见光加红外反解温度、发射率与纹理：给暗光融合补一个物理中间层",
      authors: ["Daoheng Li", "Jianjun Qian", "Mengkai Yan", "Jian Yang"],
      venue: "arXiv · cs.CV", published: "2026-11-07", url: "https://arxiv.org/abs/2611.10665", pdf: "https://arxiv.org/pdf/2611.10665",
      tags: ["热简并", "物理分解", "红外可见光融合"], primaryClass: "cs.CV",
      summary: "暗光下可见光对比度低、细节被埋，红外图像又缺颜色与纹理，因此常把两者融合。现有融合方法多直接优化图像外观或任务特征，没有显式拆解热观测背后的耦合因素，导致「热简并」下物理可解释性差。高光谱热测量本可做物理分解，但需要专用硬件，逐像素物理标注的成本也很高。作者提出 TeX-Gen：从成对的可见光与红外图像生成「温度（T）、发射率（ε）、纹理（X）」三层物理表征。生成部分构建互补的多视角特征，用独立的分支门控把线索分别路由到温度、发射率、纹理三个图。评价部分提出 TeXMetric，把辐射度重建、通道结构与材料一致性结合起来，在不需要逐像素物理标签的情况下评估生成质量。再用 TeX Tune 做任务引导的调整：冻结生成器，联合优化调整模块与下游任务网络。在 FLIR、LLVIP、M3FD、MSRS 上，暗光任务性能具有竞争力；在 HADAR 数据集上还考察了 TeXMetric 分数与下游检测性能的关联。",
      why: "热红外成像的经典难题是温度与发射率简并——测到的辐射是两者乘积，单波段无法拆开。这篇不去造硬件解简并，而是用可见光提供材质与纹理这一侧的信息，让网络输出 T、ε、X 三层，再用一个无需像素级标签的度量去约束它们。这在思想上比「端到端融合出好看的图」前进了一步：中间层是可解释、可复用的物理量，下游任务可以只取其中一层。但要说清它的定位——这是「代理分解」而非真解简并：没有多波段热测量，T 与 ε 的分离本质上靠先验与数据分布，换个场景（不同材质、不同环境温度）很可能失准。TeXMetric 与检测性能的相关性在 HADAR 上被检验，这是全文最有说服力的部分；若相关性弱，三层表征的意义就退回成一种正则。"
    },
    {
      id: "2611.11160", no: 116, tier: "C", section: "system", primaryTopic: "T03", topicTags: ["T03"], confidence: 0.52, score: 0.52, evidence: "real",
      title: "Design and Performance Evaluation of a Quad-panel Dual-isotope PET Imaging System",
      titleZh: "四面板、不要专用瞬发伽马探测器：一台紧凑型双同位素 PET 的系统账本",
      authors: ["Yu Shi", "Tengjiao Wang", "Sen Yang", "Bo Wen", "Meng Niu", "Yirong Wang", "Risheng Yang", "Yanyun Liu", "Wei Ding", "Xiangyu Liu", "Fei Kang", "Shouping Zhu"],
      venue: "arXiv · physics.med-ph", published: "2026-11-08", url: "https://arxiv.org/abs/2611.11160", pdf: "https://arxiv.org/pdf/2611.11160",
      tags: ["双同位素 PET", "三重符合", "时间分辨"], primaryClass: "physics.med-ph",
      summary: "同时双同位素 PET 想靠瞬发伽马做同位素分离，但三重符合计数统计量低，符合逻辑对多能量事件提取的灵活性也有限。作者设计并评估了一套紧凑的四面板双同位素 PET：四块探测面板正交排布，每块有效面积 107.0 × 145.5 mm，不配专用瞬发伽马探测器。用 GPU 加速的软件符合处理，从原始单光子数据中提取双重符合与被瞬发伽马标记的三重符合；三重符合图像用一致延迟期望最大化（consistent delayed EM）做偶然—三重校正后重建，再在图像域用空间变化的缩放因子做同位素分离。系统在 511、1077、1275 keV 的能量分辨分别为 15.7%、12.9%、10.2%，时间分辨 1.35 ns；68Ga Derenzo 模体中双重符合图像可分辨 1.6 mm 棒、1.2 mm 部分可辨，三重符合图像仍能辨认 1.6 mm 棒；三个轴向上的瞬发伽马平均探测效率为 8.19%–9.31%；350–650 keV 能窗下双重符合灵敏度 1.12%，双能窗偶然校正后三重符合灵敏度 0.068%；散射比 27.81%；NECR 在 9.38 MBq 时双重符合为 83 kcps、21.42 MBq 时三重符合为 106 cps。模体与在体实验成功分离了 18F/68Ga 与 18F/124I 的分布。",
      why: "双同位素 PET 的关键在怎么把两种示踪剂分开，主流做法是加专用瞬发伽马探测器，代价是几何复杂、成本上升。这篇反其道而行：不加硬件，靠 1.35 ns 的时间分辨与软件符合逻辑，从同一批单光子数据里挖出被瞬发伽马标记的三重符合。1.35 ns 这个数字是全文的技术支点——没有它，三重符合的时间窗会把偶然符合全放进来。值得称道的是它把代价讲得很清楚：三重符合灵敏度只有 0.068%、NECR 仅 106 cps，意味着这条路只适合小动物等低计数、可长采集的场景，不可能直接上临床。做 PET 系统、光子计数、多示踪剂成像的读者，可以把它当作一份诚实的系统设计账本——性能指标与代价逐项列出，比只报分辨率的文章有用得多。"
    },
    {
      id: "hs-hdr-fusion", no: 117, tier: "A", section: "core", primaryTopic: "T05", topicTags: ["T05", "T08"], confidence: 0.92, score: 0.92, evidence: "real",
      title: "Overcoming Dynamic Range Limitations in Computational Hyperspectral Imaging",
      titleZh: "编码测量域的多曝光融合：让计算光谱成像同时看清高光与阴影",
      authors: ["Qianqian Yu", "Jinhang Lin", "Zhihai Yao", "Shuo Wang", "Chaofan Weng", "Xiang Hao"],
      venue: "arXiv · physics.optics", published: "2026-11-10", url: "https://arxiv.org/abs/2611.13663", pdf: "https://arxiv.org/pdf/2611.13663",
      tags: ["计算光谱成像", "高动态范围", "多曝光融合"], primaryClass: "physics.optics",
      summary: "计算光谱成像靠编码掩膜把光谱压进少数测量，但掩膜各通道的光谱响应率并不相等，它们的可靠区间落在完全不同的入射信号水平上——高光处某些通道先饱和，阴影处另一些通道先被噪声淹没。于是单次曝光无法同时保住高光与阴影的光谱信息，测量可靠性同时取决于曝光时间与编码通道。作者提出一套物理引导的多曝光融合框架，直接在编码测量域（而非重建后的图像域）工作：由解析的可靠性先验与学到的空间变化、通道特定修正共同决定自适应融合权重；再用测量域的光谱角监督约束通道间相对响应，为下游光谱反演提供一致输入。集合式（set-wise）建模使框架可接受不同数量、不同配置的输入曝光。作者在 9 通道宽带编码随机光谱相机上实现，含全视场传感器响应标定与通道感知的可靠性门控。仿真 HDR 基准上重建误差低于代表性融合方法；用光密度靶实测，光谱重建动态范围相对最佳固定单曝光提升 16.0 dB。",
      why: "多曝光融合在 HDR 摄影里是常识，搬到编码孔径光谱相机上却多出一层麻烦：要融合的不是像素亮度，而是「测量可靠性」，而可靠性逐通道不同——同一个像素，红端通道可能刚好、蓝端通道已经饱和。所以权重不能只看亮度阈值，得由「曝光 × 通道」二维决定，这正是它用解析先验加学习修正的原因。更关键的是把融合放在编码测量域：先融合再反演，测量之间「同一场景、同一掩膜」的物理约束还在；若先各自反演再融合光谱，非线性反演会把误差分布扭曲，融合反而放大不一致。测量域的光谱角监督也很巧——约束通道相对响应而非绝对光谱，恰好对上掩膜响应的失配。需注意 16 dB 来自光密度靶这类受控目标，真实场景的提升会受杂散光与掩膜标定精度限制。"
    },
    {
      id: "depthgs", no: 118, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.76, score: 0.76, evidence: "real",
      title: "DepthGS: Depth-Guided Gaussian Splatting with Adaptive Regularization for High-Quality Surface Reconstruction",
      titleZh: "先证出深度误差与重建误差的上界，再让法向正则强度跟着几何可靠性走",
      authors: ["Xiao Ren", "Yu Liu", "Ning An", "Jian Cheng", "Xin Qiao", "You-Fu Li", "He Kong"],
      venue: "arXiv · cs.CV", published: "2026-11-10", url: "https://arxiv.org/abs/2611.13628", pdf: "https://arxiv.org/pdf/2611.13628",
      tags: ["高斯泼溅", "表面重建", "自适应正则"], primaryClass: "cs.CV",
      summary: "3DGS 已被广泛扩展到表面重建，但深度信息与重建误差之间究竟是什么关系一直没被讲清，几何优化策略的设计因此缺少依据。DepthGS 补上这一环：分别在单视图与多视图设定下推导深度差异与重建误差的关系，并给出重建误差的上界。由上界出发设计两套自适应正则——单视图优化中，用局部深度差算出的几何可靠性权重调节法向约束强度，深度差大处几何不可信、法向先验就该放松；多视图优化中引入跨视图深度一致性正则，把当前视图的深度预测变换到邻近视图，要求它与邻近视图自身的深度图一致。在 DTU、Mip-NeRF360、Tanks and Temples 上，表面重建与新视图合成均取得有竞争力的结果。",
      why: "高斯泼溅做表面重建的常见做法是把法向约束、深度约束一股脑加上去，权重靠调参。这篇的价值在于先给一个可证的误差上界，再让正则强度成为上界的函数——「深度差大 ⇒ 几何不可信 ⇒ 少信法向先验」，这条链可解释，也容易迁移到神经隐式、点云等别的表征。跨视图一致性那一项尤其值得借：单目深度先验在多视图优化里常互相打架，与其各自平滑，不如显式要求变换后的一致。要留意上界推导依赖线性化等假设，在薄结构、镜面这些假设失效处，自适应权重未必比固定权重更稳；文中的「competitive」也说明它是把工程直觉理论化，而非大幅超越。"
    },
    {
      id: "retinexgs", no: 119, tier: "A", section: "core", primaryTopic: "T04", topicTags: ["T04", "T08"], confidence: 0.76, score: 0.76, evidence: "real",
      title: "RetinexGS: Retinex-Inspired Gaussian Splatting for Low-Light RAW Reconstruction",
      titleZh: "Retinex 分解加 DNG 噪声元数据：暗光下的 RAW 域高斯泼溅",
      authors: ["Yulang Fei", "Huaiyuan Weng", "Chul Min Yeum"],
      venue: "arXiv · cs.CV", published: "2026-11-09", url: "https://arxiv.org/abs/2611.13280", pdf: "https://arxiv.org/pdf/2611.13280",
      tags: ["低光重建", "RAW 域", "噪声建模"], primaryClass: "cs.CV",
      summary: "常规 3DGS 管线遇到严重欠曝输入会失稳：颜色漂移、出现漂浮伪影、暗区重建残缺。作者认为根因是低光观测里的噪声没被正确建模，而 RAW 图天然适合噪声感知重建——它保留线性传感器测量，还带着噪声元数据。RetinexGS 因此在 RAW 域重建，并把 Retinex 思路搬进外观建模：把每个高斯的颜色分解为与视角无关的基础色，加一个共享的、随位置与视角变化的调制场，两个分量分别正则化，用这种分解约束从含噪观测中的外观学习。优化时用 DNG 噪声元数据给损失加权以处理信号相关噪声；渲染时采用畸变感知采样，避免对 RAW 目标做空间重采样。暗区几何稀疏用深度引导初始化解决。在三个公开 RawNeRF 场景与两个自采暗光 RAW 场景上，同输入训练下平均 sRGB PSNR 比 LE3D 高 2.18 dB、比 RawNeRF 高 2.71 dB，且仍支持实时新视图渲染。",
      why: "低光 3DGS 的关键不在网络结构，而在损失该相信哪个像素。RAW 域的好处是噪声模型有物理依据：散粒噪声方差随信号线性增长，DNG 元数据直接给出增益与读出噪声，于是每个像素都能算出「这个观测有多可信」，这比在 sRGB 上做完 Gamma 再猜噪声干净得多。Retinex 分解解决的是另一处病：暗区里基础色与光照耦合，网络容易用「整体压暗」解释，导致颜色不稳；拆成视角无关基色加共享调制场，等于把材质与光照的职责分开，各自正则化就不会互相污染。畸变感知渲染这个细节也别忽略——对 RAW 插值会破坏噪声的独立性，使前面的噪声加权失效，这类自洽性在低光管线里常被漏掉。局限是仍要多视图采集与逐场景优化，深度引导初始化也依赖外部深度先验的质量。"
    },
    {
      id: "diff-ano-usct", no: 120, tier: "B", section: "efficient", primaryTopic: "T04", topicTags: ["T04"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Diff-ANO: Towards fast high-resolution ultrasound computed tomography via conditional consistency models and adjoint neural operators",
      titleZh: "一致性模型加伴随神经算子：超声计算断层成像的快速高分辨反演",
      authors: ["Xiang Cao", "Qiaoqiao Ding", "Xinliang Liu", "Lei Zhang", "Xiaoqun Zhang"],
      venue: "Inverse Problems", published: "2026-11-10", url: "https://doi.org/10.1088/1361-6420/aec045", doi: "10.1088/1361-6420/aec045",
      tags: ["超声计算断层成像", "伴随神经算子", "扩散先验"], primaryClass: "physics.med-ph",
      summary: "超声计算断层成像（USCT）要从残缺、含噪的散射波测量中反演声速，其不稳定性来自非线性逆映射与采集几何。生成模型能提供学习到的先验来稳定这类受偏微分方程约束的反演。Diff-ANO 把条件一致性模型（CM）的细化与代理测量梯度优化交替进行：先用一个前向多重网格神经算子（MgNO）一次预测发射/接收的源场库，再对这些场做共轭残差组合，得到伴随作用与声速梯度。在四种采集几何下，与基于求解器的细化做匹配计算效率比较，取得 6.75 倍在线加速。为降低「逆犯罪」风险，作者另用更细网格的 WaveSim 做独立测量验证，重建趋势与匹配 CBS 的研究一致。",
      why: "扩散先验做 PDE 约束反演已是主流，代价通常落在线推理上：每步都要对一个正问题求解器求梯度。这篇把两件事解耦——神经算子一次前向给出源场库（相当于把 Helmholtz 解算器蒸馏成算子），伴随梯度只是这些场的共轭组合，于是测量一致性那一步不再需要迭代求解器；生成先验只负责在零空间里补信息。6.75 倍是这么来的，不是靠少采样。方法学上更值得学的是它对 inverse crime 的处理：训练与评估若共用同一套 CBS 正演，重建好看可能只是自洽；用细网格 WaveSim 独立验证，「趋势一致」才成为有意义的结论。可质疑处在数据真实性——全文仍是仿真测量，作者自己也把扩展到更真实采集物理与实测数据列为后续工作，6.75 倍与高分辨的结论在体模、活体上仍需复核。"
    },
    {
      id: "holo-retinal-rpd", no: 121, tier: "B", section: "system", primaryTopic: "T06", topicTags: ["T06"], confidence: 0.72, score: 0.72, evidence: "real",
      title: "Holographic Retinal Projection With Wide Field of View and Large Eyebox Based on an Electrically Switchable Liquid Crystal Grating",
      titleZh: "电控双周期液晶光栅加角度载波复用：视网膜投影做到 15° 视场与 25.6 mm 眼盒",
      authors: ["Zi Wang", "Li Liang", "Yuan Liu", "Miao Xu", "Qibin Feng", "Guoqiang Lv", "Fan‐Chuan Lin", "Qian Huang", "Yi‐Long Li", "Di Wang"],
      venue: "Laser & Photonics Reviews", published: "2026-11-11", url: "https://doi.org/10.1002/lpor.72207", doi: "10.1002/lpor.72207",
      tags: ["全息显示", "视网膜投影", "液晶光栅"], primaryClass: "physics.optics",
      summary: "全息视网膜投影（RPD）因恒焦成像与灵活波前调制成为近眼显示热点，但在有限带宽下视场与眼盒互相牵制，宽视场加大眼盒的全息视网膜投影此前未能实现。作者提出基于电控双周期液晶光栅的方案，让两者同时扩展：设计光栅的同时提出角度载波复用全息图生成方法，把多个子图像编码到不同角度，由液晶光栅做二次衍射，从而在空间上拼出更大的视场与出瞳。实现结果为 15° 视场与 25.6 mm 水平复制视点跨度，相对传统全息 RPD 参考配置约提升 3 倍视场、4 倍水平视点跨度，两者乘积对应 12 倍的「视场—视点跨度」性能指标提升。",
      why: "全息显示有一个绕不过去的带宽算术：空间光调制器的像素间距决定最大衍射角，视场就那么大；想让眼盒变大得复制出瞳，而复制既分掉能量、又受同一个衍射角限制。这篇不去硬提带宽，而是把「一次衍射不够」变成「两次衍射」——全息图先把子图像编码到不同载波角度，液晶光栅再按不同周期状态把它们二次衍射到不同出瞳位置。读出结论时要注意口径：3 倍视场、4 倍视点跨度是分别测的，12 倍是两者的乘积指标，不等于整体观感提升 12 倍。另外电控切换意味着不同光栅状态要分时工作，闪烁、亮度下降与状态间串扰在摘要里没有给出评估，这也是该方案走向近眼显示产品的关键待验项。"
    },
    {
      id: "marigold-v2", no: 122, tier: "B", section: "core", primaryTopic: "T08", topicTags: ["T08", "T04"], confidence: 0.65, score: 0.65, evidence: "real",
      title: "Marigold V2: Revisiting Diffusion Transformers for Monocular Depth Estimation",
      titleZh: "Marigold V2：把扩散 Transformer 重新调教成更锐利的单目深度估计器",
      authors: ["Igor Pavlovic", "Thiemo Wandel", "Anton Obukhov", "Luca Bartolomei", "Andrey Davydov", "Fabio Tosi", "Matteo Poggi", "Sabine Süsstrunk", "Dengxin Dai"],
      venue: "ACM Transactions on Graphics 45(6): 1–15", published: "2026-11-09", url: "https://doi.org/10.1145/3842528", doi: "10.1145/3842528",
      tags: ["单目深度", "扩散 Transformer", "稠密回归"], primaryClass: "cs.CV",
      summary: "单目深度估计极度欠定，下游却连着场景重建、计算摄影与机器人，而现有模型在分布外输入上泛化差、深度图不够锐利。作者重访 Marigold 这套「把现代图像生成/编辑模型改造成深度估计器」的做法，这次针对扩散 Transformer（DiT）：目标是让预训练的多步流匹配模型做单步推理，必要时量化，在保住模型容量的同时把推理成本压下来。他们分析了朴素训练产生的伪影，给出两条补救——把模型内部表示与从真值提取的语义特征对齐；采用围绕新的 Sinkhorn 损失设计的两阶段微调。结果深度图更锐利干净，分布外泛化明显改善，KITTI 与 ETH3D 上 AbsRel 相对此前最好结果提升 16–26%，定性上能分辨此前模型解不出的毛发、枝叶与发丝级边缘。迁到表面法向估计、本征图像分解等其他稠密回归任务同样达到最优。",
      why: "生成模型做深度估计有个反直觉的坑：预训练模型的内部表示是按语义组织的，不是按几何。直接微调出来的深度图会继承语义边界——物体轮廓很清楚，细几何却糊成一片。第一条补救正对此：用真值的语义特征去校准内部表示，而不是让模型自己猜。第二条补救用 Sinkhorn 把「深度分布匹配」写成可微最优传输，避免 L1/L2 在深度不连续处给出折中解，伪影就是这么消掉的。对做计算成像的人，实用价值在于单步推理、可量化的 DiT 深度先验能直接塞进 3DGS、NLOS、去散射等下游管线当几何先验，成本比多步扩散低一个量级。提醒一句：AbsRel 是在 KITTI/ETH3D 这类室外驾驶与室内场景上测的，显微、水下、强散射仍属分布外。"
    },
    {
      id: "pulseq-pcasl", no: 123, tier: "C", section: "tools", primaryTopic: "T10", topicTags: ["T10"], confidence: 0.64, score: 0.64, evidence: "real",
      title: "Vendor-Agnostic Pseudocontinuous Arterial Spin Labeling Using Pulseq: Cross-Vendor Quantitative Evaluation",
      titleZh: "用开源 Pulseq 重写一遍序列：让三家厂商的灌注成像给出同一套脑血流值",
      authors: ["Jianing Zhang", "Jun Wang", "Joseph G. Woods", "Shaoyou Ye", "Shuai Ming", "Hongwei Li", "Wei Hu", "Wei Wei", "Xiaohu Li", "Thomas W. Okell", "Yang Ji"],
      venue: "arXiv · physics.med-ph", published: "2026-11-09", url: "https://arxiv.org/abs/2611.12584", pdf: "https://arxiv.org/pdf/2611.12584",
      tags: ["开源序列", "跨厂商可复现", "灌注成像"], primaryClass: "physics.med-ph",
      summary: "多中心动脉自旋标记（ASL）研究的痛点是不同扫描仪之间脑血流（CBF）定量不一致。作者用开源 Pulseq 框架实现了一套与厂商无关的伪连续 ASL（PCASL）序列，部署在西门子、GE、联影三家的 3T 机器上；7 名健康志愿者在每个平台做单标记后延迟 PCASL（含重测），并以一套改造过的西门子原生序列作参照。评估指标含个体内变异系数、RMSE、区域 CBF 相关与体素级变异比图。结果：灰质平均 CBF 在各实现间接近；重测灰质 CVwithin 全部低于 4%（西门子—Pulseq 最低 2.65%，原生序列 3.64%）；原厂与 Pulseq 实现间的灰质 RMSE 与重测 RMSE 相当，跨扫描仪 CVwithin 均低于 3%；体素级变异比分布中心在 100% 附近，说明跨厂商差异与生理基线波动同量级。多 PLD 与免规划 VE-PCASL 作为概念验证在所有平台跑通，给出一致的 CBF/ATT 图与血管区域划分。",
      why: "这篇不含新重建算法，但解决的是更靠前的问题：序列由各家厂商实现，同一个名字下的射频与梯度波形并不相同，血流定量就带着系统性偏差。Pulseq 的意义是把序列写成可交换的文本，同一份波形在三个平台执行，剩下的差异才归因于硬件与生理。衡量标准也值得学：作者没有停在「平均值接近」，而是用重测变异作尺度去校准跨厂商差异——RMSE 与重测 RMSE 相当、变异比中心落在 100%，这才是有说服力的等价性论证。对做计算成像的读者，这是「采集端标准化」的范本：重建再好，若各中心的原始数据不在同一物理尺度上，跨中心学习与评测就不成立。局限是志愿者仅 7 人、只覆盖 3T 与三家厂商，且各平台仍需独立的安全与序列验证。"
    }
  ],
  archive: [
    { date: "2026-11-12", number: 15, count: 7, highlights: "5 个方向 · 跨方向 3 篇 · 编码域多曝光光谱 HDR / 深度上界驱动高斯正则 / RAW 域暗光高斯", current: true,
      dailyIds: ["hs-hdr-fusion", "depthgs", "retinexgs", "diff-ano-usct", "holo-retinal-rpd", "marigold-v2", "pulseq-pcasl"], headlineIds: ["hs-hdr-fusion", "depthgs", "retinexgs"] },
    { date: "2026-11-11", number: 14, count: 12, highlights: "6 个方向 · 跨方向 5 篇 · 动态高斯 SLAM 来源标签 / 平行平移 CT 分块扩散 / 彩色目标偏振三维", current: false,
      dailyIds: ["2611.12038", "ptct-diffusion", "2611.12716", "pol3d-color-dispersion", "pol-display-ir", "2611.10413", "lc-axicon-holo", "2611.12667", "2611.11814", "modalformer-llie", "2611.10665", "2611.11160"], headlineIds: ["2611.12038", "ptct-diffusion", "pol3d-color-dispersion"] },
    { date: "2026-11-10", number: 13, count: 5, highlights: "3 个方向 · 跨方向 2 篇 · 复平面支撑约束的动态 CDI / 抗失调级联全息 / 高光谱端元数据缩减", current: false,
      dailyIds: ["cdi-dyn-support", "cascaded-holo", "hs-endmember-dr", "2611.06020", "2611.05359"], headlineIds: ["cdi-dyn-support", "cascaded-holo", "hs-endmember-dr"] },
    { date: "2026-11-09", number: 12, count: 7, highlights: "4 个方向 · 跨方向 3 篇 · 6 飞米散斑光谱仪 / OCT 薄界面 SDF 回归 / 单目 4D 重建数据集", current: false,
      dailyIds: ["speckle-fm", "bbnirs-abs", "pg-sdfnet", "niraf-lsci", "m3isr-bench", "tt4d-lift", "mrf-reg-hybrid"], headlineIds: ["speckle-fm", "pg-sdfnet", "tt4d-lift"] },
    { date: "2026-11-08", number: 11, count: 8, highlights: "4 个方向 · 跨方向 1 篇 · 动态 RGB-热 4D 重建 / 组织偏振前向模型 / 相干声波纳米成像", current: false,
      dailyIds: ["dtg-4d", "pmgs-mesh", "ao-litho-dan", "josaa-polar-fwd", "lpr-kk-kerker", "lpr-phonon", "oe-ife-markov", "mm-cage-llie"], headlineIds: ["dtg-4d", "josaa-polar-fwd", "lpr-phonon"] },
    { date: "2026-11-07", number: 10, count: 13, highlights: "7 个方向 · 跨方向 3 篇 · 互补传感器生成重建 / 散斑自画像散焦校正 / 编码孔径 CT 投影补全", current: false,
      dailyIds: ["2611.07665", "x8gj-tvc3", "boe-pam-beams", "ao-coded-ct", "ir-amenet", "ao-fringe-speckle", "ao-ghost-spad", "2611.08288", "2611.07613", "lpr-metalens-ip", "2611.05510", "lpr-itpd", "lpr-oct-scope"], headlineIds: ["2611.07665", "x8gj-tvc3", "ao-coded-ct"] },
    { date: "2026-11-06", number: 9, count: 11, highlights: "7 个方向 · 跨方向 2 篇 · 光栅扫描衍射层析 / 稀疏 X 光基础模型 / 双域联合流逆问题", current: false,
      dailyIds: ["siam-rsdt", "2611.06784", "2611.05843", "sparc-xray", "lpr-petg", "boe-oral", "2611.06736", "2611.04548", "rs-lfsr", "lpr-slim", "cosrev-spec3d"], headlineIds: ["siam-rsdt", "sparc-xray", "2611.05843"] },
    { date: "2026-11-05", number: 8, count: 12, highlights: "正式期刊/会议专刊 · 三信源 · 12 篇均经联网核实真实 DOI", current: false,
      dailyIds: ["iccv-lpp", "nature-comm-transient", "cvpr-rm-spad", "josa-a-nlos", "iccp-phasor", "cvpr-opp-tof", "advphoton-color", "cvpr-daps", "intelopt-qpi", "sciadv-spi", "nature-neat", "tci-dot"], headlineIds: ["iccv-lpp", "nature-comm-transient", "cvpr-rm-spad"] },
    { date: "2026-11-05", number: 7, count: 9, highlights: "6 个方向 · 跨方向 3 篇 · 稀疏视角冠脉扩散先验 / 夜间 IQA 基准 / 参考光抗扰光纤成像", current: false,
      dailyIds: ["2611.04604", "2611.04811", "2611.04427", "2611.04498", "2611.05020", "2611.05206", "2611.05008", "2611.03455", "2611.04877"], headlineIds: ["2611.04604", "2611.04811", "2611.04427"] },
    { date: "2026-11-04", number: 6, count: 6, highlights: "5 个方向 · 跨方向 1 篇 · 遮挡式 NLOS 闪光 LiDAR / 超低场 MRI 开源工具链 / 单像素定量相位压缩", current: false,
      dailyIds: ["2611.04068", "2611.01511", "2611.01675", "2611.01888", "2611.04092", "2611.01823"], headlineIds: ["2611.04068", "2611.01511", "2611.01675"] },
    { date: "2026-11-03", number: 5, count: 13, highlights: "6 个方向 · 跨方向 2 篇 · 稀疏视角 CBCT / 荧光涨落超分辨 / 叠层衍射扩散采样", current: false,
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
