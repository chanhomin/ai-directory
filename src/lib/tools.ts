export type PricingType = "free" | "freemium" | "paid";

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  url: string;
  pricing: PricingType;
  plans: PricingPlan[];
  featured: boolean;
  logo: string;
  addedAt: string;
}

export const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "writing", label: "글쓰기" },
  { id: "image", label: "이미지" },
  { id: "coding", label: "코딩" },
  { id: "productivity", label: "생산성" },
  { id: "video", label: "비디오" },
  { id: "audio", label: "오디오" },
  { id: "chatbot", label: "챗봇" },
  { id: "research", label: "리서치" },
];

export const TOOLS: Tool[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "OpenAI의 가장 강력한 대화형 AI",
    description:
      "ChatGPT는 OpenAI가 만든 대화형 AI로, 글쓰기, 코딩, 분석, 번역 등 다양한 작업을 자연어로 처리할 수 있습니다. GPT-4o 모델을 기반으로 이미지 분석, 파일 첨부, 웹 검색도 지원합니다.",
    category: "chatbot",
    tags: ["GPT-4", "대화", "글쓰기", "코딩", "분석"],
    url: "https://chatgpt.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["GPT-4o 제한 사용", "웹 검색", "이미지 업로드"] },
      { name: "Plus", price: "$20/월", features: ["GPT-4o 무제한", "GPT-o1 접근", "DALL·E 이미지 생성", "파일 분석"], highlighted: true },
      { name: "Team", price: "$30/월·인", features: ["Plus 기능 전체", "팀 관리 콘솔", "데이터 학습 제외"] },
    ],
    featured: true,
    logo: "🤖",
    addedAt: "2024-01-01",
  },
  {
    slug: "claude",
    name: "Claude",
    tagline: "Anthropic의 안전하고 강력한 AI 어시스턴트",
    description:
      "Claude는 Anthropic이 개발한 AI 어시스턴트로, 긴 문서 분석, 코드 작성, 창의적 글쓰기에 특히 강합니다. 최대 200K 토큰의 컨텍스트 윈도우를 지원해 긴 문서도 한번에 처리할 수 있습니다.",
    category: "chatbot",
    tags: ["Claude 3", "대화", "분석", "코딩", "안전성"],
    url: "https://claude.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["Claude Sonnet 제한 사용", "파일 첨부", "프로젝트 기능"] },
      { name: "Pro", price: "$20/월", features: ["Claude 3.5 Sonnet/Opus 우선 접근", "5배 많은 사용량", "Projects 무제한"], highlighted: true },
    ],
    featured: true,
    logo: "✨",
    addedAt: "2024-01-02",
  },
  {
    slug: "midjourney",
    name: "Midjourney",
    tagline: "최고 품질의 AI 이미지 생성 도구",
    description:
      "Midjourney는 텍스트 프롬프트로 고품질 이미지를 생성하는 AI 도구입니다. 예술적인 스타일부터 사실적인 이미지까지 다양한 스타일을 지원하며, Discord 기반으로 운영됩니다.",
    category: "image",
    tags: ["이미지 생성", "아트", "디자인", "Discord"],
    url: "https://midjourney.com",
    pricing: "paid",
    plans: [
      { name: "Basic", price: "$10/월", features: ["200장/월 생성", "상업적 사용 가능", "Discord 접근"] },
      { name: "Standard", price: "$30/월", features: ["15시간 Fast 모드", "Relax 모드 무제한", "동시 3개 작업"], highlighted: true },
      { name: "Pro", price: "$60/월", features: ["30시간 Fast 모드", "Stealth 모드(비공개)", "동시 12개 작업"] },
    ],
    featured: true,
    logo: "🎨",
    addedAt: "2024-01-03",
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    tagline: "AI 기반 코드 자동완성 및 페어 프로그래밍",
    description:
      "GitHub Copilot은 OpenAI Codex를 기반으로 한 AI 코딩 어시스턴트입니다. VS Code, JetBrains 등 주요 IDE에서 코드 자동완성, 함수 생성, 버그 수정을 지원합니다.",
    category: "coding",
    tags: ["코딩", "자동완성", "VS Code", "IDE", "GitHub"],
    url: "https://github.com/features/copilot",
    pricing: "paid",
    plans: [
      { name: "Individual", price: "$10/월", features: ["코드 자동완성", "채팅 기능", "CLI 지원"], highlighted: true },
      { name: "Business", price: "$19/월·인", features: ["Individual 전체", "조직 정책 관리", "감사 로그"] },
    ],
    featured: true,
    logo: "💻",
    addedAt: "2024-01-04",
  },
  {
    slug: "notion-ai",
    name: "Notion AI",
    tagline: "Notion에 내장된 AI 글쓰기 어시스턴트",
    description:
      "Notion AI는 노션 워크스페이스에 통합된 AI 도구로, 문서 요약, 글쓰기, 번역, 아이디어 생성을 지원합니다. 기존 Notion 사용자라면 추가 설치 없이 바로 사용 가능합니다.",
    category: "productivity",
    tags: ["노션", "글쓰기", "요약", "번역", "생산성"],
    url: "https://notion.so/product/ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["AI 20회 체험", "기본 노션 기능"] },
      { name: "Plus + AI", price: "$16/월", features: ["AI 무제한", "무제한 블록", "파일 업로드 무제한"], highlighted: true },
    ],
    featured: false,
    logo: "📝",
    addedAt: "2024-01-05",
  },
  {
    slug: "runway",
    name: "Runway",
    tagline: "AI 기반 동영상 생성 및 편집",
    description:
      "Runway는 텍스트나 이미지로 동영상을 생성하고 편집할 수 있는 AI 플랫폼입니다. Gen-2 모델로 고품질 영상 생성, 배경 제거, 모션 브러시 등 다양한 기능을 제공합니다.",
    category: "video",
    tags: ["동영상", "영상 생성", "편집", "Gen-2"],
    url: "https://runwayml.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["125 크레딧 제공", "Gen-3 Alpha 접근", "최대 5초 영상"] },
      { name: "Standard", price: "$15/월", features: ["625 크레딧/월", "최대 16초 영상", "워터마크 없음"], highlighted: true },
      { name: "Pro", price: "$35/월", features: ["2250 크레딧/월", "최대 16초 영상", "4K 내보내기"] },
    ],
    featured: false,
    logo: "🎬",
    addedAt: "2024-01-06",
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    tagline: "가장 자연스러운 AI 음성 생성",
    description:
      "ElevenLabs는 텍스트를 매우 자연스러운 음성으로 변환하는 AI 도구입니다. 목소리 복제, 다국어 지원, 감정 표현이 가능하며, 팟캐스트, 오디오북, 동영상 더빙에 활용됩니다.",
    category: "audio",
    tags: ["음성 합성", "TTS", "목소리 복제", "다국어"],
    url: "https://elevenlabs.io",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["월 10,000자", "목소리 3개 생성", "영어 등 기본 언어"] },
      { name: "Starter", price: "$5/월", features: ["월 30,000자", "목소리 10개 생성", "상업적 사용"], highlighted: true },
      { name: "Creator", price: "$22/월", features: ["월 100,000자", "목소리 30개", "Professional 복제"] },
    ],
    featured: false,
    logo: "🎙️",
    addedAt: "2024-01-07",
  },
  {
    slug: "perplexity",
    name: "Perplexity AI",
    tagline: "AI 기반 실시간 검색 엔진",
    description:
      "Perplexity AI는 인터넷을 실시간으로 검색해 출처와 함께 정확한 답변을 제공하는 AI 검색 엔진입니다. 학술 논문, 최신 뉴스, 전문 지식을 빠르게 리서치할 수 있습니다.",
    category: "research",
    tags: ["검색", "리서치", "실시간", "출처", "학술"],
    url: "https://perplexity.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["무제한 검색", "GPT-4o Mini 기반", "파일 업로드 3개/일"] },
      { name: "Pro", price: "$20/월", features: ["Pro Search 300회/일", "GPT-4o·Claude 선택", "파일 업로드 무제한"], highlighted: true },
    ],
    featured: false,
    logo: "🔍",
    addedAt: "2024-01-08",
  },
  {
    slug: "stable-diffusion",
    name: "Stable Diffusion",
    tagline: "오픈소스 AI 이미지 생성 모델",
    description:
      "Stable Diffusion은 무료 오픈소스 이미지 생성 AI입니다. 로컬에서 무제한으로 실행하거나 다양한 웹 서비스를 통해 사용할 수 있으며, 커스터마이징이 매우 자유롭습니다.",
    category: "image",
    tags: ["오픈소스", "이미지 생성", "무료", "로컬"],
    url: "https://stability.ai",
    pricing: "free",
    plans: [
      { name: "무료(로컬)", price: "완전 무료", features: ["무제한 이미지 생성", "상업적 사용 가능", "커스터마이징 자유", "GPU 필요"], highlighted: true },
      { name: "DreamStudio(클라우드)", price: "크레딧 구매", features: ["로컬 설치 불필요", "500장 기본 제공", "최신 모델 접근"] },
    ],
    featured: false,
    logo: "🖼️",
    addedAt: "2024-01-09",
  },
  {
    slug: "cursor",
    name: "Cursor",
    tagline: "AI 네이티브 코드 에디터",
    description:
      "Cursor는 AI가 깊이 통합된 VS Code 기반 코드 에디터입니다. 자연어로 코드 작성, 버그 수정, 코드베이스 전체를 이해하는 채팅 기능을 제공하며, 개발 생산성을 크게 향상시킵니다.",
    category: "coding",
    tags: ["코딩", "IDE", "에디터", "VS Code", "AI 코딩"],
    url: "https://cursor.sh",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["2주 Pro 체험", "이후 50회 느린 요청/월", "기본 자동완성"] },
      { name: "Pro", price: "$20/월", features: ["500회 빠른 요청/월", "무제한 느린 요청", "Claude·GPT-4 선택"], highlighted: true },
      { name: "Business", price: "$40/월·인", features: ["Pro 전체", "중앙 결제 관리", "사용 분석"] },
    ],
    featured: true,
    logo: "⚡",
    addedAt: "2024-01-10",
  },
  {
    slug: "gemini",
    name: "Gemini",
    tagline: "Google의 멀티모달 AI 어시스턴트",
    description:
      "Gemini는 Google이 개발한 멀티모달 AI로, 텍스트, 이미지, 코드, 오디오를 동시에 처리할 수 있습니다. Google 검색, Gmail, Docs 등 Google 서비스와 깊이 통합되어 있습니다.",
    category: "chatbot",
    tags: ["Google", "멀티모달", "검색", "대화", "이미지"],
    url: "https://gemini.google.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["Gemini 1.5 Flash", "이미지 분석", "Google 앱 연동"] },
      { name: "Advanced", price: "$19.99/월", features: ["Gemini 1.5 Pro Ultra", "2TB Google One 포함", "Gmail·Docs 심층 연동"], highlighted: true },
    ],
    featured: false,
    logo: "💎",
    addedAt: "2024-01-11",
  },
  {
    slug: "kling-ai",
    name: "Kling AI",
    tagline: "고품질 AI 동영상 생성",
    description:
      "Kling AI는 Kuaishou가 개발한 AI 동영상 생성 도구로, 텍스트와 이미지로 최대 2분 길이의 고품질 영상을 생성할 수 있습니다. 영화 수준의 화질과 자연스러운 움직임이 특징입니다.",
    category: "video",
    tags: ["동영상", "영상 생성", "AI 비디오"],
    url: "https://klingai.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["일 66 크레딧", "최대 5초 영상", "워터마크 포함"] },
      { name: "Standard", price: "$10/월", features: ["660 크레딧/월", "최대 10초 영상", "워터마크 없음"], highlighted: true },
      { name: "Pro", price: "$35/월", features: ["3000 크레딧/월", "최대 2분 영상", "상업적 사용"] },
    ],
    featured: false,
    logo: "🎥",
    addedAt: "2024-01-12",
  },
  {
    slug: "suno",
    name: "Suno",
    tagline: "텍스트로 완성된 음악을 만드는 AI",
    description:
      "Suno는 짧은 텍스트 프롬프트만으로 보컬과 악기가 포함된 완성된 음악을 생성하는 AI입니다. 장르, 분위기, 가사를 지정하면 수 초 만에 고품질 음원을 만들어줍니다.",
    category: "audio",
    tags: ["음악 생성", "작곡", "AI 음악", "보컬"],
    url: "https://suno.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["하루 50 크레딧", "비상업적 사용", "곡 공개 저장"] },
      { name: "Pro", price: "$10/월", features: ["2500 크레딧/월", "상업적 사용 가능", "비공개 생성"], highlighted: true },
      { name: "Premier", price: "$30/월", features: ["10,000 크레딧/월", "우선 생성 처리", "최대 4분 곡"] },
    ],
    featured: false,
    logo: "🎵",
    addedAt: "2024-01-13",
  },
  {
    slug: "v0",
    name: "v0 by Vercel",
    tagline: "텍스트로 UI 컴포넌트를 즉시 생성",
    description:
      "v0는 Vercel이 만든 AI UI 생성 도구로, 자연어 설명만으로 React + Tailwind CSS 컴포넌트를 즉시 생성합니다. shadcn/ui 기반으로 실제 프로덕션에 바로 사용 가능한 코드를 제공합니다.",
    category: "coding",
    tags: ["UI 생성", "React", "Tailwind", "Vercel", "컴포넌트"],
    url: "https://v0.dev",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["월 200 크레딧", "퍼블릭 프로젝트", "기본 컴포넌트 생성"] },
      { name: "Premium", price: "$20/월", features: ["월 5,000 크레딧", "프라이빗 프로젝트", "우선 생성"], highlighted: true },
    ],
    featured: false,
    logo: "🧩",
    addedAt: "2024-01-14",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo AI",
    tagline: "게임·디자인 특화 AI 이미지 생성",
    description:
      "Leonardo AI는 게임 에셋, 캐릭터 디자인, 콘셉트 아트에 특화된 AI 이미지 생성 플랫폼입니다. 다양한 파인튜닝 모델과 일관된 캐릭터 유지 기능이 강점입니다.",
    category: "image",
    tags: ["이미지 생성", "게임 에셋", "캐릭터", "콘셉트 아트"],
    url: "https://leonardo.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["일 150 토큰", "기본 모델 접근", "퍼블릭 생성"] },
      { name: "Apprentice", price: "$12/월", features: ["월 8,500 토큰", "프라이빗 생성", "우선 처리"], highlighted: true },
      { name: "Artisan", price: "$30/월", features: ["월 25,000 토큰", "캐릭터 일관성", "실시간 생성"] },
    ],
    featured: false,
    logo: "🦁",
    addedAt: "2024-01-15",
  },
  {
    slug: "heygen",
    name: "HeyGen",
    tagline: "AI 아바타로 동영상 제작",
    description:
      "HeyGen은 실제 사람처럼 말하는 AI 아바타 동영상을 만드는 플랫폼입니다. 텍스트만 입력하면 다국어 립싱크 영상을 자동 생성하며, 마케팅·교육·유튜브 콘텐츠 제작에 많이 쓰입니다.",
    category: "video",
    tags: ["AI 아바타", "립싱크", "동영상", "마케팅", "다국어"],
    url: "https://heygen.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["영상 1개 체험", "워터마크 포함", "기본 아바타"] },
      { name: "Creator", price: "$29/월", features: ["월 15분 영상", "워터마크 없음", "아바타 5개"], highlighted: true },
      { name: "Business", price: "$89/월", features: ["월 30분 영상", "커스텀 아바타", "팀 협업"] },
    ],
    featured: false,
    logo: "🧑‍💻",
    addedAt: "2024-01-16",
  },
  {
    slug: "grok",
    name: "Grok",
    tagline: "xAI의 실시간 정보 기반 AI 어시스턴트",
    description:
      "Grok은 Elon Musk의 xAI가 개발한 AI로, X(트위터) 실시간 데이터에 접근할 수 있어 최신 트렌드와 뉴스에 대한 답변이 강점입니다. 유머러스한 답변 스타일도 특징입니다.",
    category: "chatbot",
    tags: ["실시간", "X", "트위터", "뉴스", "대화"],
    url: "https://grok.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["Grok 2 기본 접근", "X 실시간 검색", "이미지 생성 10회/일"] },
      { name: "X Premium+", price: "$16/월", features: ["Grok 2 무제한", "이미지 생성 무제한", "X 광고 제거"], highlighted: true },
    ],
    featured: false,
    logo: "⚡",
    addedAt: "2024-01-17",
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    tagline: "텍스트 렌더링에 강한 AI 이미지 생성",
    description:
      "Ideogram은 이미지 안에 텍스트를 정확하게 렌더링하는 데 특화된 AI 이미지 생성 도구입니다. 로고, 포스터, 배너 디자인처럼 글자가 포함된 이미지 제작에 탁월합니다.",
    category: "image",
    tags: ["이미지 생성", "텍스트 렌더링", "로고", "포스터", "디자인"],
    url: "https://ideogram.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["일 10회 생성", "퍼블릭 저장", "기본 해상도"] },
      { name: "Basic", price: "$8/월", features: ["월 400 크레딧", "프라이빗 생성", "고해상도"], highlighted: true },
      { name: "Plus", price: "$20/월", features: ["월 1,000 크레딧", "우선 처리", "상업적 사용"] },
    ],
    featured: false,
    logo: "🖋️",
    addedAt: "2024-01-18",
  },
  {
    slug: "descript",
    name: "Descript",
    tagline: "텍스트 편집으로 동영상·팟캐스트 편집",
    description:
      "Descript는 영상을 텍스트처럼 편집할 수 있는 혁신적인 도구입니다. 자동 자막 생성, 특정 단어 삭제 시 해당 구간 영상 자동 제거, AI 목소리 복제 기능을 제공합니다.",
    category: "video",
    tags: ["동영상 편집", "팟캐스트", "자막", "목소리 복제"],
    url: "https://descript.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["월 1시간 전사", "워터마크 포함", "기본 편집"] },
      { name: "Hobbyist", price: "$24/월", features: ["월 10시간 전사", "워터마크 없음", "4K 내보내기"], highlighted: true },
      { name: "Creator", price: "$40/월", features: ["월 30시간 전사", "목소리 복제 기능", "팀 협업"] },
    ],
    featured: false,
    logo: "✂️",
    addedAt: "2024-01-19",
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    tagline: "마케팅 카피를 자동으로 작성",
    description:
      "Copy.ai는 광고 문구, 이메일, SNS 포스트, 제품 설명 등 마케팅 카피를 AI로 자동 생성하는 도구입니다. 90개 이상의 템플릿과 25개 이상의 언어를 지원합니다.",
    category: "writing",
    tags: ["카피라이팅", "마케팅", "이메일", "SNS", "광고"],
    url: "https://copy.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["월 2,000 단어", "90개 이상 템플릿", "25개 언어"] },
      { name: "Pro", price: "$49/월", features: ["단어 무제한", "5개 워크스페이스", "우선 지원"], highlighted: true },
    ],
    featured: false,
    logo: "✍️",
    addedAt: "2024-01-20",
  },
  {
    slug: "replit",
    name: "Replit",
    tagline: "브라우저에서 바로 코딩하고 배포",
    description:
      "Replit은 브라우저 기반 AI 코딩 환경으로, 자연어로 앱을 만들고 즉시 배포까지 할 수 있습니다. Replit Agent가 요구사항을 이해해 코드를 자동 생성하고 실행합니다.",
    category: "coding",
    tags: ["코딩", "브라우저", "배포", "AI 에이전트", "풀스택"],
    url: "https://replit.com",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["퍼블릭 프로젝트 무제한", "기본 AI 자동완성", "클라우드 실행"] },
      { name: "Core", price: "$25/월", features: ["프라이빗 프로젝트", "Replit Agent 접근", "항상 켜진 앱"], highlighted: true },
    ],
    featured: false,
    logo: "🔁",
    addedAt: "2024-01-21",
  },
  {
    slug: "otter-ai",
    name: "Otter.ai",
    tagline: "회의를 자동으로 기록하고 요약",
    description:
      "Otter.ai는 회의, 강의, 인터뷰를 실시간으로 전사하고 AI가 핵심 내용을 요약해주는 도구입니다. Zoom, Google Meet, Microsoft Teams와 연동되어 자동으로 회의록을 생성합니다.",
    category: "productivity",
    tags: ["전사", "회의록", "요약", "Zoom", "실시간"],
    url: "https://otter.ai",
    pricing: "freemium",
    plans: [
      { name: "무료", price: "무료", features: ["월 300분 전사", "AI 요약 30회", "Zoom 연동"] },
      { name: "Pro", price: "$16.99/월", features: ["월 1,200분 전사", "AI 요약 무제한", "고급 검색"], highlighted: true },
      { name: "Business", price: "$40/월", features: ["월 6,000분 전사", "팀 관리", "CRM 연동"] },
    ],
    featured: false,
    logo: "🦦",
    addedAt: "2024-01-22",
  },
];

export function getToolsByCategory(category: string): Tool[] {
  if (category === "all") return TOOLS;
  return TOOLS.filter((t) => t.category === category);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return TOOLS.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export const PRICING_LABELS: Record<PricingType, string> = {
  free: "무료",
  freemium: "무료/유료",
  paid: "유료",
};

export const PRICING_COLORS: Record<PricingType, string> = {
  free: "bg-green-100 text-green-700",
  freemium: "bg-blue-100 text-blue-700",
  paid: "bg-orange-100 text-orange-700",
};
