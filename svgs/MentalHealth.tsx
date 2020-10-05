import React, { memo } from 'react';
import Svg, { G, Mask, Path } from 'react-native-svg';

import {useTheme} from '../context';

export const MentalHealth = memo((props: React.SVGProps<SVGSVGElement>) => {
  const {mode}: {mode: 'light' | 'dark'} = useTheme();
  const fill = mode === 'light' ? '#3333ff' : '#fff';

  return (
    // @ts-ignore
    <Svg width={29} height={36} viewBox="0 0 29 36" fill="none" {...props}>
      <Path
        d="M18.2639 6.4104C19.0549 6.56065 19.832 6.86895 20.5242 7.37004C23.2082 9.22971 23.8725 12.9234 21.9973 15.6044C19.6122 19.0241 14.8862 19.878 11.4635 17.5084C8.04372 15.1233 7.18982 10.3973 9.55942 6.97461C9.86789 6.53504 10.4675 6.42396 10.9071 6.73243C11.3466 7.0409 11.4577 7.64051 11.1493 8.08008C9.37813 10.6362 10.0099 14.163 12.566 15.9341C15.1221 17.7052 18.6489 17.0735 20.42 14.5174C21.6783 12.7155 21.2206 10.2181 19.4187 8.95987C17.6169 7.70163 15.1195 8.1593 13.8613 9.96116C13.1285 11.0272 13.381 12.4893 14.4471 13.2221C14.9583 13.5763 15.5758 13.7097 16.1909 13.6015C16.806 13.4934 17.3383 13.1446 17.6925 12.6333C17.8025 12.4775 17.8378 12.2913 17.8052 12.1245C17.7756 11.9421 17.678 11.7789 17.5192 11.6844C17.2075 11.4645 16.7747 11.543 16.5548 11.8548C16.2463 12.2944 15.6467 12.4054 15.2072 12.097C14.7676 11.7885 14.6565 11.1889 14.965 10.7493C15.7834 9.57099 17.4153 9.27032 18.6092 10.0917C19.1766 10.4887 19.5601 11.0919 19.6875 11.7749C19.8149 12.458 19.6668 13.153 19.2668 13.7359C18.6226 14.6741 17.6377 15.2905 16.522 15.4964C15.4062 15.7023 14.2643 15.4532 13.329 14.7935C11.3994 13.4467 10.9246 10.7853 12.2559 8.85273C13.661 6.86987 16.0304 5.98615 18.2639 6.4104Z"
        fill={fill}
      />
      <Mask id="path-2-inside-1" fill="white">
        <Path d="M16.8256 0.0378956C17.8949 0.0882988 18.9561 0.274115 19.9768 0.578617L22.1833 1.45392C23.8751 2.30304 25.359 3.49498 26.4467 4.93566C28.2316 7.30453 29.2072 11.4474 28.7162 14.5729C28.2314 17.6593 26.4517 21.2138 25.4016 22.6442C24.4892 23.884 24.0488 24.7715 24.0151 25.4379C23.8857 27.9845 24.4495 30.4638 26.025 34.2673L26.2889 34.6805C26.4856 34.9882 26.3972 35.3983 26.0916 35.5964C25.7857 35.7947 25.901 35.7478 25.1818 35.729L8.97283 35.7064C8.83652 35.7064 8.69908 35.6639 8.5812 35.5758C8.28925 35.3578 8.2281 34.9427 8.44469 34.6488L8.78871 34.1818C9.04543 33.6645 9.14491 33.4464 9.22855 32.7092C9.36238 31.5376 9.13796 30.2766 8.90514 29.5525C8.87324 29.4724 8.60792 29.2659 8.26538 29.2605C7.92405 29.2541 7.5654 29.2894 7.18561 29.3268L7.171 29.3283L7.16237 29.3291L7.16166 29.3292C6.31802 29.4121 5.26834 29.5154 3.85078 29.2532C3.2866 29.1482 2.80441 28.8231 2.49229 28.3377C1.84551 27.3312 2.05976 25.897 2.24505 25.1315C2.25393 25.0942 2.25722 25.0697 2.25839 25.0556C2.2373 25.0243 2.19037 24.9678 2.15462 24.9248C1.96434 24.696 1.64587 24.313 1.657 23.7194L1.65608 23.6975C1.65001 23.5398 1.65463 23.3343 1.7204 23.1086C1.13698 22.2202 1.55642 21.3302 1.70685 21.0111L1.70686 21.011L1.74896 20.9208C1.77022 20.8738 1.7889 20.8305 1.80533 20.7906C1.30044 20.6219 0.183928 20.1973 0.0180839 18.9477C-0.123053 17.9304 0.572505 16.911 1.73486 15.3536L1.98423 15.0185C2.80795 13.9048 2.75118 13.3667 2.58686 12.9873C2.03759 11.7218 2.27518 10.9075 2.52674 10.0453L2.5268 10.0451C2.5912 9.8246 2.63716 9.54832 2.69534 9.19849C2.72487 9.02098 2.75689 8.82868 2.79537 8.61905C3.09532 6.9839 4.06018 3.94394 7.15192 1.95766C9.53212 0.428742 12.5154 -0.162989 16.8256 0.0378956Z" />
      </Mask>
      <Path
        d="M16.8256 0.0378956C17.8949 0.0882988 18.9561 0.274115 19.9768 0.578617L22.1833 1.45392C23.8751 2.30304 25.359 3.49498 26.4467 4.93566C28.2316 7.30453 29.2072 11.4474 28.7162 14.5729C28.2314 17.6593 26.4517 21.2138 25.4016 22.6442C24.4892 23.884 24.0488 24.7715 24.0151 25.4379C23.8857 27.9845 24.4495 30.4638 26.025 34.2673L26.2889 34.6805C26.4856 34.9882 26.3972 35.3983 26.0916 35.5964C25.7857 35.7947 25.901 35.7478 25.1818 35.729L8.97283 35.7064C8.83652 35.7064 8.69908 35.6639 8.5812 35.5758C8.28925 35.3578 8.2281 34.9427 8.44469 34.6488L8.78871 34.1818C9.04543 33.6645 9.14491 33.4464 9.22855 32.7092C9.36238 31.5376 9.13796 30.2766 8.90514 29.5525C8.87324 29.4724 8.60792 29.2659 8.26538 29.2605C7.92405 29.2541 7.5654 29.2894 7.18561 29.3268L7.171 29.3283L7.16237 29.3291L7.16166 29.3292C6.31802 29.4121 5.26834 29.5154 3.85078 29.2532C3.2866 29.1482 2.80441 28.8231 2.49229 28.3377C1.84551 27.3312 2.05976 25.897 2.24505 25.1315C2.25393 25.0942 2.25722 25.0697 2.25839 25.0556C2.2373 25.0243 2.19037 24.9678 2.15462 24.9248C1.96434 24.696 1.64587 24.313 1.657 23.7194L1.65608 23.6975C1.65001 23.5398 1.65463 23.3343 1.7204 23.1086C1.13698 22.2202 1.55642 21.3302 1.70685 21.0111L1.70686 21.011L1.74896 20.9208C1.77022 20.8738 1.7889 20.8305 1.80533 20.7906C1.30044 20.6219 0.183928 20.1973 0.0180839 18.9477C-0.123053 17.9304 0.572505 16.911 1.73486 15.3536L1.98423 15.0185C2.80795 13.9048 2.75118 13.3667 2.58686 12.9873C2.03759 11.7218 2.27518 10.9075 2.52674 10.0453L2.5268 10.0451C2.5912 9.8246 2.63716 9.54832 2.69534 9.19849C2.72487 9.02098 2.75689 8.82868 2.79537 8.61905C3.09532 6.9839 4.06018 3.94394 7.15192 1.95766C9.53212 0.428742 12.5154 -0.162989 16.8256 0.0378956Z"
        stroke={fill}
        strokeWidth={3.5}
        mask="url(#path-2-inside-1)"
      />
    </Svg>
  );
});
