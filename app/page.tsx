"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpenText,
  Box,
  CalendarDays,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Rocket,
  ShieldCheck,
  UserRound,
} from "lucide-react";

type LanguageCode = "ko" | "en" | "zh" | "ja" | "fr";

const profileLinks = {
  github: "https://github.com/Ko-kuma",
  blog: "https://dev-blog-zeta-sand.vercel.app",
};

const languageOptions: Array<{ code: LanguageCode; label: string }> = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English (영어)" },
  { code: "zh", label: "中文 (중국어)" },
  { code: "ja", label: "日本語 (일본어)" },
  { code: "fr", label: "français (프랑스어)" },
];

const badgeColors = [
  "blue",
  "yellow",
  "green",
  "red",
  "purple",
  "ink",
  "teal",
  "pink",
] as const;

const copy = {
  ko: {
    eyebrow: "Developer Portfolio Blog",
    heroSubtitle:
      "안녕하세요 :)\nPython을 주력으로 사용하며 꾸준히 성장하는 개발자 김희진입니다.",
    primaryCta: "이메일 보내기",
    secondaryCta: "기술 스택 보기",
    languageButton: "언어 변경",
    sections: {
      about: "자기소개",
      skills: "Skills",
      links: "Links",
      blog: "Blog Notes",
    },
    profile: {
      name: "이름",
      gender: "성별",
      birth: "생년월일",
      email: "이메일",
      major: "전공",
      male: "남",
      computerScience: "컴퓨터과학",
    },
    intro:
      "웹 개발, 데이터베이스, 자동화 등 다양한 분야를 경험하며 개발 전반에 대한 이해를 넓혀가고 있습니다. 아직 배워야 할 것이 많다고 생각하며, 새로운 기술을 익히고 이를 프로젝트에 적용하는 과정을 즐깁니다.\n\nAI 시대에서 개발자는 AI를 경쟁자가 아닌 협력자로 활용할 수 있어야 한다고 생각합니다. 저 역시 AI 에이전트와 협업하며 프로젝트를 기획하고 구현하는 경험을 쌓아가고 있으며, AI에 의존하기보다 이를 효과적으로 활용하여 더 나은 결과를 만들어 낼 수 있는 개발자로 성장하고자 합니다.",
    skillGroups: {
      language: "언어",
      frontend: "프론트엔드",
      backend: "백엔드",
      database: "DB",
      security: "보안",
      devops: "DevOps",
    },
    skillSummaries: {
    language:  "자동화와 데이터 처리 중심의 주력 언어",
    frontend:  "사용자 경험을 고려한 화면 설계 및 구현",
    backend:   "API 설계와 서비스 로직 구현",
    database:  "관계형 데이터 모델링과 안정적인 저장 구조",
    },
    securitySummary: "다층 방어 웹 보안",
    devopsSummary: "컨테이너화 및 무중단 자동 배포",
    linkLabels: {
      github: "깃허브",
      blog: "개인 블로그",
      pending: "URL 입력 필요",
    },
    blogPosts: [
      {
        title: "Next.js로 포트폴리오 구조 잡기",
        body: "섹션 설계, 반응형 레이아웃, 정적 콘텐츠 구성 방식을 정리합니다.",
      },
      {
        title: "FastAPI와 PostgreSQL 연결 전략",
        body: "API 경계, 데이터 모델링, 마이그레이션 흐름을 중심으로 기록합니다.",
      },
      {
        title: "JWT/JWE와 httpOnly 쿠키 보안",
        body: "인증 토큰을 안전하게 다루는 방식을 다층 방어 관점에서 살펴봅니다.",
      },
    ],
  },
  en: {
    eyebrow: "Developer Portfolio Blog",
    heroSubtitle:
      "Hello :)\nI am Kim Heejin, a developer who mainly uses Python and continues to grow steadily.",
    primaryCta: "Send Email",
    secondaryCta: "View Skills",
    languageButton: "Change language",
    sections: {
      about: "About",
      skills: "Skills",
      links: "Links",
      blog: "Blog Notes",
    },
    profile: {
      name: "Name",
      gender: "Gender",
      birth: "Birth Date",
      email: "Email",
      major: "Major",
      male: "Male",
      computerScience: "Computer Science",
    },
    intro:
      "I am expanding my understanding of development as a whole by experiencing various areas such as web development, databases, and automation. I believe there is still a lot for me to learn, and I enjoy the process of learning new technologies and applying them to projects.\n\nIn the age of AI, I believe developers should be able to use AI as a collaborator, not as a competitor. I am also gaining experience planning and implementing projects in collaboration with AI agents, and I want to grow into a developer who can use AI effectively to create better results rather than simply relying on it.",
    skillGroups: {
      language: "Language",
      frontend: "Frontend",
      backend: "Backend",
      database: "DB",
      security: "Security",
      devops: "DevOps",
    },
    skillSummaries: {
    language:  "Primary language for automation and data processing",
    frontend:  "UI design and implementation with user experience in mind",
    backend:   "API design and service logic implementation",
    database:  "Relational data modeling and reliable storage structure",
    },
    securitySummary: "Defense-in-depth web security",
    devopsSummary: "Containerized zero-downtime deployment",
    linkLabels: {
      github: "GitHub",
      blog: "Personal Blog",
      pending: "URL needed",
    },
    blogPosts: [
      {
        title: "Structuring a Portfolio with Next.js",
        body: "Notes on section planning, responsive layout, and static content composition.",
      },
      {
        title: "Connecting FastAPI and PostgreSQL",
        body: "A record of API boundaries, data modeling, and migration flow.",
      },
      {
        title: "JWT/JWE and httpOnly Cookie Security",
        body: "How to handle auth tokens safely through a defense-in-depth lens.",
      },
    ],
  },
  zh: {
    eyebrow: "开发者作品集博客",
    heroSubtitle:
      "你好 :)\n我是 Kim Heejin，一名以 Python 为主力并持续成长的开发者。",
    primaryCta: "发送邮件",
    secondaryCta: "查看技术栈",
    languageButton: "更改语言",
    sections: {
      about: "自我介绍",
      skills: "技能",
      links: "链接",
      blog: "博客笔记",
    },
    profile: {
      name: "姓名",
      gender: "性别",
      birth: "出生日期",
      email: "邮箱",
      major: "专业",
      male: "男",
      computerScience: "计算机科学",
    },
    intro:
      "我通过 Web 开发、数据库、自动化等多种领域的实践，正在拓宽对开发整体的理解。我认为自己还有很多需要学习的地方，也享受学习新技术并将其应用到项目中的过程。\n\n在 AI 时代，我认为开发者应该能够把 AI 作为协作者来运用，而不是把它视为竞争者。我也正在积累与 AI Agent 协作、规划并实现项目的经验，希望成长为一名不依赖 AI，而是有效运用 AI 创造更好结果的开发者。",
    skillGroups: {
      language: "语言",
      frontend: "前端",
      backend: "后端",
      database: "数据库",
      security: "安全",
      devops: "DevOps",
    },
    skillSummaries: {
    language:  "以自动化和数据处理为核心的主力语言",
    frontend:  "注重用户体验的界面设计与实现",
    backend:   "API设计与服务逻辑实现",
    database:  "关系型数据建模与稳定的存储结构",
    },
    securitySummary: "多层防御 Web 安全",
    devopsSummary: "容器化与零停机自动部署",
    linkLabels: {
      github: "GitHub",
      blog: "个人博客",
      pending: "需要 URL",
    },
    blogPosts: [
      {
        title: "用 Next.js 搭建作品集结构",
        body: "整理页面区块、响应式布局与静态内容组织方式。",
      },
      {
        title: "FastAPI 与 PostgreSQL 的连接策略",
        body: "记录 API 边界、数据建模和迁移流程。",
      },
      {
        title: "JWT/JWE 与 httpOnly Cookie 安全",
        body: "从多层防御角度整理认证令牌的安全处理方式。",
      },
    ],
  },
  ja: {
    eyebrow: "開発者ポートフォリオブログ",
    heroSubtitle:
      "こんにちは :)\nPythonを主力として使いながら着実に成長している開発者、キム・ヒジンです。",
    primaryCta: "メールを送る",
    secondaryCta: "スキルを見る",
    languageButton: "言語変更",
    sections: {
      about: "自己紹介",
      skills: "スキル",
      links: "リンク",
      blog: "ブログノート",
    },
    profile: {
      name: "名前",
      gender: "性別",
      birth: "生年月日",
      email: "メール",
      major: "専攻",
      male: "男性",
      computerScience: "コンピュータサイエンス",
    },
    intro:
      "Web開発、データベース、自動化などさまざまな分野を経験しながら、開発全般への理解を広げています。まだ学ぶべきことは多いと考えており、新しい技術を学び、それをプロジェクトに適用する過程を楽しんでいます。\n\nAI時代において、開発者はAIを競争相手ではなく協力者として活用できるべきだと考えています。私自身もAIエージェントと協業しながらプロジェクトを企画し実装する経験を積んでおり、AIに依存するのではなく、効果的に活用してより良い結果を生み出せる開発者として成長したいです。",
    skillGroups: {
      language: "言語",
      frontend: "フロントエンド",
      backend: "バックエンド",
      database: "DB",
      security: "セキュリティ",
      devops: "DevOps",
    },
    skillSummaries: {
    language:  "自動化とデータ処理を中心とした主力言語",
    frontend:  "ユーザー体験を考慮した画面設計と実装",
    backend:   "API設計とサービスロジックの実装",
    database:  "リレーショナルデータモデリングと安定したストレージ構造",
    },
    securitySummary: "多層防御のWebセキュリティ",
    devopsSummary: "コンテナ化と無停止自動デプロイ",
    linkLabels: {
      github: "GitHub",
      blog: "個人ブログ",
      pending: "URL未設定",
    },
    blogPosts: [
      {
        title: "Next.jsでポートフォリオを構成する",
        body: "セクション設計、レスポンシブレイアウト、静的コンテンツ構成を整理します。",
      },
      {
        title: "FastAPIとPostgreSQLの接続戦略",
        body: "API境界、データモデリング、マイグレーションの流れを記録します。",
      },
      {
        title: "JWT/JWEとhttpOnly Cookieの安全性",
        body: "認証トークンを安全に扱う方法を多層防御の視点で考えます。",
      },
    ],
  },
  fr: {
    eyebrow: "Portfolio Blog Développeur",
    heroSubtitle:
      "Bonjour :)\nJe suis Kim Heejin, un développeur qui utilise principalement Python et progresse continuellement.",
    primaryCta: "Envoyer un e-mail",
    secondaryCta: "Voir les compétences",
    languageButton: "Changer de langue",
    sections: {
      about: "Présentation",
      skills: "Compétences",
      links: "Liens",
      blog: "Notes de blog",
    },
    profile: {
      name: "Nom",
      gender: "Genre",
      birth: "Date de naissance",
      email: "E-mail",
      major: "Spécialité",
      male: "Homme",
      computerScience: "Informatique",
    },
    intro:
      "J'élargis ma compréhension du développement dans son ensemble en explorant différents domaines comme le développement web, les bases de données et l'automatisation. Je pense qu'il me reste encore beaucoup à apprendre, et j'aime découvrir de nouvelles technologies puis les appliquer à des projets.\n\nÀ l'ère de l'IA, je pense qu'un développeur doit savoir utiliser l'IA comme un collaborateur plutôt que comme un concurrent. J'accumule également de l'expérience en collaborant avec des agents IA pour planifier et réaliser des projets, et je souhaite devenir un développeur capable d'utiliser efficacement l'IA pour créer de meilleurs résultats, plutôt que d'en dépendre.",
    skillGroups: {
      language: "Langage",
      frontend: "Frontend",
      backend: "Backend",
      database: "DB",
      security: "Sécurité",
      devops: "DevOps",
    },
    skillSummaries: {
    language:  "Langage principal axé sur l'automatisation et le traitement des données",
    frontend:  "Conception et implémentation d'interfaces centrées sur l'expérience utilisateur",
    backend:   "Conception d'API et implémentation de la logique métier",
    database:  "Modélisation de données relationnelles et structure de stockage fiable",
    },
    securitySummary: "Sécurité web en défense multicouche",
    devopsSummary: "Déploiement conteneurisé sans interruption",
    linkLabels: {
      github: "GitHub",
      blog: "Blog personnel",
      pending: "URL requise",
    },
    blogPosts: [
      {
        title: "Structurer un portfolio avec Next.js",
        body: "Notes sur les sections, le responsive design et la composition du contenu statique.",
      },
      {
        title: "Connecter FastAPI et PostgreSQL",
        body: "Organisation des frontières API, du modèle de données et des migrations.",
      },
      {
        title: "JWT/JWE et sécurité des cookies httpOnly",
        body: "Gérer les jetons d'authentification avec une approche de défense multicouche.",
      },
    ],
  },
} satisfies Record<LanguageCode, PortfolioCopy>;

type PortfolioCopy = {
  eyebrow: string;
  heroSubtitle: string;
  primaryCta: string;
  secondaryCta: string;
  languageButton: string;
  sections: Record<"about" | "skills" | "links" | "blog", string>;
  profile: {
    name: string;
    gender: string;
    birth: string;
    email: string;
    major: string;
    male: string;
    computerScience: string;
  };
  intro: string;
  skillGroups: Record<
    "language" | "frontend" | "backend" | "database" | "security" | "devops",
    string
  >;
  skillSummaries: Record<
    "language" | "frontend" | "backend" | "database",
    string
  >;
  securitySummary: string;
  devopsSummary: string;
  linkLabels: {
    github: string;
    blog: string;
    pending: string;
  };
  blogPosts: Array<{
    title: string;
    body: string;
  }>;
};

const profileValues = {
  name: "김희진",
  birth: "1994.12.12",
  email: "water5cup@gmail.com",
};

const heroImages = [
  {
    src: "/images/gallery/workspace.jpg",
    alt: "Developer desk with books, monitors, and keyboard",
    className: "workspace",
  },
  {
    src: "/images/gallery/donut-desk.jpg",
    alt: "Pink donut on a laptop desk",
    className: "donut",
  },
  {
    src: "/images/gallery/night-tower.jpg",
    alt: "Night city tower",
    className: "tower",
  },
  {
    src: "/images/gallery/sunset-sky.jpg",
    alt: "Bright sunset sky",
    className: "sky",
  },
  {
    src: "/images/gallery/atrium-stairs.jpg",
    alt: "Indoor atrium stairs",
    className: "atrium",
  },
];

function	getSkillRows(t:	PortfolioCopy)	{
		return	[
				{
						//	t.skillGroups.language는	한국어면	"언어",	영어면	"Language"로	자동	전환돼요.
						label:	t.skillGroups.language,
						icon:	Code2,
						//	summary도	copy	객체에	추가한	번역값을	사용해요.
						summary:	t.skillSummaries.language,
						items:	["Python"],
				},
				{
						label:	t.skillGroups.frontend,
						icon:	Layers3,
						summary:	t.skillSummaries.frontend,
						items:	["Next.js"],
				},
				{
						label:	t.skillGroups.backend,
						icon:	Box,
						summary:	t.skillSummaries.backend,
						items:	["FastAPI"],
				},
				{
						label:	t.skillGroups.database,
						icon:	Database,
						summary:	t.skillSummaries.database,
						items:	["PostgreSQL"],
				},
				{
						label:	t.skillGroups.security,
						icon:	ShieldCheck,
						//	보안과	DevOps	부제목은	원본부터	번역값을	쓰고	있었어요.
						summary:	t.securitySummary,
						items:	["JWT/JWE",	"httpOnly	Cookie",	"CORS	Control",	"Defense	in	Depth"],
				},
				{
						label:	t.skillGroups.devops,
						icon:	Rocket,
						summary:	t.devopsSummary,
						items:	["Docker",	"Alembic",	"Vercel",	"Zero-downtime	Deploy"],
				},
		];
}

function disabledLinkProps(url: string) {
  if (url) {
    return {
      href: url,
      target: "_blank",
      rel: "noreferrer",
    };
  }

  return {
    href: "#links",
    "aria-disabled": true,
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault(),
  };
}

function TypewriterText({
  text,
  className,
  as = "p",
  speed = 44,
}: {
  text: string;
  className: string;
  as?: "h1" | "p";
  speed?: number;
}) {
  const [visibleText, setVisibleText] = useState("");
  const Tag = as;

  useEffect(() => {
    const letters = Array.from(text);
    let index = 0;

    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(letters.slice(0, index).join(""));

      if (index >= letters.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  return (
    <Tag className={className} aria-label={text}>
      <span>{visibleText}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </Tag>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>("ko");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const t = copy[language];
  const skillRows = useMemo(() => getSkillRows(t), [t]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -16% 0px",
        threshold: 0.22,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const profileItems = [
    [t.profile.name, profileValues.name, UserRound],
    [t.profile.gender, t.profile.male, UserRound],
    [t.profile.birth, profileValues.birth, CalendarDays],
    [t.profile.email, profileValues.email, Mail],
    [t.profile.major, t.profile.computerScience, GraduationCap],
  ] as const;

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand-mark" href="#top" aria-label="Kim Heejin portfolio home">
          KHJ
        </a>

        <div className="krds-drop-wrap krds-language">
          <button
            type="button"
            className="krds-btn small text drop-btn"
            aria-expanded={isLanguageOpen}
            aria-haspopup="menu"
            onClick={() => setIsLanguageOpen((value) => !value)}
          >
            <Globe2 aria-hidden="true" size={18} />
            {t.languageButton}
            <ChevronDown aria-hidden="true" size={17} />
          </button>
          <div className={`drop-menu${isLanguageOpen ? " is-open" : ""}`}>
            <div className="drop-in">
              <ul className="drop-list" role="menu">
                {languageOptions.map((option) => (
                  <li key={option.code}>
                    <button
                      type="button"
                      className={`item-link${language === option.code ? " active" : ""}`}
                      lang={option.code}
                      role="menuitem"
                      onClick={() => {
                        setLanguage(option.code);
                        setIsLanguageOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section className="hero-section scroll-panel scroll-reveal" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <TypewriterText
            as="h1"
            className="hero-title-typing"
            key={`hero-${language}`}
            text={t.heroSubtitle}
          />
          <div className="hero-actions">
            <a className="button primary" href={`mailto:${profileValues.email}`}>
              <Mail aria-hidden="true" size={18} />
              {t.primaryCta}
            </a>
            <a className="button secondary" href="#skills">
              <Code2 aria-hidden="true" size={18} />
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className="hero-gallery" aria-label="Personal photo gallery">
          {heroImages.map((image, index) => (
            <figure
              className={`gallery-tile ${image.className}`}
              key={image.src}
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 900px) 50vw, 18vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        className="section about-section scroll-panel scroll-reveal"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="section-heading">
          <span>01</span>
          <h2 id="about-title">{t.sections.about}</h2>
        </div>
        <div className="about-grid">
          <TypewriterText
            className="intro-text"
            key={`intro-${language}`}
            speed={18}
            text={t.intro}
          />
          <dl className="profile-list">
            {profileItems.map(([label, value, Icon]) => (
              <div className="profile-item" key={label}>
                <dt>
                  <Icon aria-hidden="true" size={18} />
                  {label}
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="skills-band scroll-panel scroll-reveal"
        id="skills"
        aria-labelledby="skills-title"
      >
        <div className="skills-heading">
          <Code2 aria-hidden="true" size={30} />
          <h2 id="skills-title">{t.sections.skills}</h2>
        </div>
        <div className="skills-board">
          {skillRows.map((row, rowIndex) => {
            const Icon = row.icon;

            return (
              <div className="skill-row" key={row.label}>
                <div className="skill-label">
                  <span className="skill-icon">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <div>
                    <strong>{row.label}</strong>
                    {row.summary ? <small>{row.summary}</small> : null}
                  </div>
                </div>
                <div className="skill-tags">
                  {row.items.map((item, itemIndex) => (
                    <span
                      className={`skill-tag ${badgeColors[(rowIndex + itemIndex) % badgeColors.length]}`}
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        className="section links-section scroll-panel scroll-reveal"
        id="links"
        aria-labelledby="links-title"
      >
        <div className="section-heading">
          <span>02</span>
          <h2 id="links-title">{t.sections.links}</h2>
        </div>
        <div className="link-grid">
          <a className="link-card" {...disabledLinkProps(profileLinks.github)}>
            <GitBranch aria-hidden="true" size={28} />
            <span>{t.linkLabels.github}</span>
            <small>
              {profileLinks.github || t.linkLabels.pending}
              <ArrowUpRight aria-hidden="true" size={15} />
            </small>
          </a>
          <a className="link-card" {...disabledLinkProps(profileLinks.blog)}>
            <BookOpenText aria-hidden="true" size={28} />
            <span>{t.linkLabels.blog}</span>
            <small>
              {profileLinks.blog || t.linkLabels.pending}
              <ArrowUpRight aria-hidden="true" size={15} />
            </small>
          </a>
        </div>
      </section>

    </main>
  );
}
