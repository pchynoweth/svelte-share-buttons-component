import type { SvelteComponent } from 'svelte';

interface ShareButtonProps {
  href: string;
  label?: string;
  fill?: boolean;
  ariaLabel?: string;
  class?: string;
}

interface EmailProps {
  subject: string;
  body: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface FacebookProps {
  quote: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface HackerNewsProps {
  title: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface LineProps {
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface LinkedInProps {
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface PinterestProps {
  description: string;
  url: string;
  media: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface RedditProps {
  title: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface TelegramProps {
  text: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface TumblrProps {
  title: string;
  caption: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface ViberProps {
  text: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface VkProps {
  title: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface WhatsAppProps {
  text: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface XProps {
  text: string;
  url: string;
  ariaLabel?: string;
  hashtags?: string;
  via?: string;
  related?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

interface XingProps {
  title: string;
  url: string;
  ariaLabel?: string;
  class?: string;
  label?: string;
  fill?: boolean;
}

export class Email extends SvelteComponent<EmailProps> {}
export class Facebook extends SvelteComponent<FacebookProps> {}
export class HackerNews extends SvelteComponent<HackerNewsProps> {}
export class Line extends SvelteComponent<LineProps> {}
export class LinkedIn extends SvelteComponent<LinkedInProps> {}
export class Pinterest extends SvelteComponent<PinterestProps> {}
export class Reddit extends SvelteComponent<RedditProps> {}
export class ShareButton extends SvelteComponent<ShareButtonProps> {}
export class Telegram extends SvelteComponent<TelegramProps> {}
export class Tumblr extends SvelteComponent<TumblrProps> {}
export class Viber extends SvelteComponent<ViberProps> {}
export class Vk extends SvelteComponent<VkProps> {}
export class WhatsApp extends SvelteComponent<WhatsAppProps> {}
export class X extends SvelteComponent<XProps> {}
export class Xing extends SvelteComponent<XingProps> {}
