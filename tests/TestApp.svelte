<script lang="ts">
  import { Bluesky, Email, Facebook, HackerNews, Line, LinkedIn, Pinterest, Reddit, Telegram, Tumblr, Viber, Vk, WhatsApp, X, Xing } from '../src/index.ts';

  const url: string = 'https://example.com/share-test';
  const title: string = 'Test Share Title';
  const desc: string = 'Test share description for testing purposes.';
</script>

<div id="test-container">
  <div data-testid="bluesky">
    <Bluesky text="{title}" {url} />
  </div>
  
  <div data-testid="email">
    <Email subject="{title}" body="{desc} {url}" />
  </div>
  
  <div data-testid="facebook">
    <Facebook {url} quote="{title}" />
  </div>
  
  <div data-testid="hackernews">
    <HackerNews {title} {url} />
  </div>
  
  <div data-testid="line">
    <Line {url} />
  </div>
  
  <div data-testid="linkedin">
    <LinkedIn {url} />
  </div>
  
  <div data-testid="pinterest">
    <Pinterest {url} media="https://example.com/image.png" description="{title}" />
  </div>
  
  <div data-testid="reddit">
    <Reddit {title} {url} />
  </div>
  
  <div data-testid="telegram">
    <Telegram text="{title}" {url} />
  </div>
  
  <div data-testid="tumblr">
    <Tumblr {title} {url} caption="{title}" />
  </div>
  
  <div data-testid="viber">
    <Viber text="{title}" {url} />
  </div>
  
  <div data-testid="vk">
    <Vk {title} {url} />
  </div>
  
  <div data-testid="whatsapp">
    <WhatsApp text="{title} {url}" />
  </div>
  
  <div data-testid="x">
    <X text="{title}" {url} />
  </div>
  
  <div data-testid="xing">
    <Xing {title} {url} />
  </div>

  <div data-testid="facebook-with-label">
    <Facebook {url} quote="{title}" label="Share on Facebook" />
  </div>

  <div data-testid="email-custom-class">
    <Email subject="{title}" body="{desc}" class="custom-class" />
  </div>

  <div data-testid="facebook-aria">
    <Facebook {url} quote="{title}" ariaLabel="Custom Facebook aria label" />
  </div>
</div>
