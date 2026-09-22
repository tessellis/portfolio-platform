import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { CaseStudyImage } from './CaseStudyImage';
import { Stats } from './Stats';
import { Stat } from './Stat';
import styles from './MDXContent.module.css';

const prettyCodeOptions = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
};

const components = {
  CaseStudyImage,
  Stats,
  Stat,
};

export function MDXContent({ source }: { source: string }) {
  return (
    <div className={styles.prose}>
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </div>
  );
}