import React, { useEffect } from "react";
import styles from "../styles/title.module.scss";

const Title = () => {
  useEffect(() => {
    clickme();
  }, []);

  const clickme = () => {
    const all = document.querySelectorAll(".svgTitle path");
    const speed = 600;
    let i = 0;
    all.forEach((item, index) => {
      i++;
      let pathLength = Math.ceil(item.getTotalLength());
      item.setAttribute("stroke-dasharray", pathLength);
      item.setAttribute("stroke-dashoffset", pathLength);
      if (index === 0) {
        item.innerHTML = `<animate id="a${i}" attributeName='stroke-dashoffset' begin=".35s" dur="${
          pathLength / speed
        }" to="0" fill="freeze"/>`;
        return;
      } else {
        item.innerHTML = `<animate id="a${i}" attributeName='stroke-dashoffset' begin="a${
          i - 1
        }.end" dur="${pathLength / speed}" to="0" fill="freeze" />`;
      }
    });
  };
  return (
    <div
      className={
        styles.title +
        " m-0 p-0 d-flex flex-column justify-content-center align-items-center"
      }
    >
      <svg
        id="svgtitle"
        className="svgTitle"
        viewBox="0 0 258 81"
        fill="url(#rainbow)"
        fillOpacity="0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="rainbow"
            x1="100%"
            x2="0%"
            y1="0%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(45)"
          >
            <stop stopColor="var(--color-blue-dark)" offset="20%" />
            <stop stopColor="var(--color-blue-darkish)" offset="50%" />
            <stop stopColor="var(--color-blue-dark)" offset="100%" />
          </linearGradient>
        </defs>
        <animate
          attributeName="fill-opacity"
          begin="a23.end"
          dur="1s"
          to="1"
          fill="freeze"
        />
        <path
          d="M7.70401 25.4481C4.65334 25.4481 2.54134 24.7867 1.36801 23.4641C0.557341 22.5254 0.152008 21.2134 0.152008 19.5281C0.152008 18.8027 0.226675 18.0241 0.376008 17.1921L1.68801 9.83205C2.64801 4.43472 6.11467 1.73605 12.088 1.73605C14.5627 1.73605 16.44 2.26939 17.72 3.33605C19 4.38139 19.64 5.82139 19.64 7.65605C19.64 8.50939 19.512 9.36272 19.256 10.2161C19.0213 11.0481 18.7867 11.6667 18.552 12.0721L18.2 12.7121H12.536C13.24 11.9014 13.592 10.7494 13.592 9.25606C13.592 8.46672 13.3893 7.84805 12.984 7.40005C12.5787 6.93072 11.9813 6.69605 11.192 6.69605C9.03734 6.69605 7.75734 7.89072 7.35201 10.2801L6.23201 16.7441C6.12534 17.2987 6.07201 17.8427 6.07201 18.3761C6.07201 19.7841 6.91467 20.4881 8.60001 20.4881C10.6267 20.4881 11.8427 19.3467 12.248 17.0641H18.008L17.848 17.9921C16.9947 22.9627 13.6133 25.4481 7.70401 25.4481Z"
        />
        <path
          d="M35.4308 20.0721C35.4308 20.6267 35.7081 20.9041 36.2628 20.9041C36.8388 20.9041 37.3188 20.7974 37.7028 20.5841L37.5428 24.2001C36.5188 25.0321 35.3668 25.4481 34.0868 25.4481C31.7401 25.4481 30.4388 24.5947 30.1828 22.8881C29.1161 24.5947 27.5481 25.4481 25.4788 25.4481C21.9801 25.4481 20.2308 23.9441 20.2308 20.9361C20.2308 20.4241 20.2841 19.8587 20.3908 19.2401L21.0628 15.4961C21.4041 13.5761 22.1828 12.0507 23.3988 10.9201C24.6361 9.76805 26.2361 9.19205 28.1988 9.19205C30.1828 9.19205 31.5268 9.65072 32.2308 10.5681L32.3908 9.60805H37.2548L35.4628 19.6881C35.4414 19.8161 35.4308 19.9441 35.4308 20.0721ZM25.9588 18.5361C25.9161 18.7281 25.8948 18.9947 25.8948 19.3361C25.8948 19.6774 26.0548 20.0187 26.3748 20.3601C26.6948 20.6801 27.2281 20.8401 27.9748 20.8401C28.7428 20.8401 29.4041 20.5414 29.9588 19.9441L30.9188 14.5681C30.6841 14.0347 30.1294 13.7681 29.2548 13.7681C27.6121 13.7681 26.6521 14.5574 26.3748 16.1361L25.9588 18.5361Z"
        />
        <path
          d="M55.0968 20.0721C55.0968 20.6267 55.3741 20.9041 55.9288 20.9041C56.5048 20.9041 56.9848 20.7974 57.3688 20.5841L57.2088 24.2001C56.1848 25.0321 55.0328 25.4481 53.7528 25.4481C51.3421 25.4481 50.0301 24.5201 49.8168 22.6641C48.5368 24.5201 46.8088 25.4481 44.6328 25.4481C42.4781 25.4481 41.0808 24.9574 40.4408 23.9761C40.0141 23.3574 39.8008 22.6534 39.8008 21.8641C39.8008 21.0747 39.8648 20.3494 39.9928 19.6881L41.7848 9.60805H47.2248L45.7208 18.1201C45.6568 18.5041 45.6248 18.8881 45.6248 19.2721C45.6248 20.2961 46.2008 20.8081 47.3528 20.8081C48.3128 20.8081 49.0808 20.4774 49.6568 19.8161L51.4808 9.60805H56.9208L55.1288 19.6881C55.1074 19.8161 55.0968 19.9441 55.0968 20.0721Z"
        />
        <path
          d="M66.2083 25.4481C63.7336 25.4481 61.9523 24.8934 60.8643 23.7841C60.0536 22.9734 59.6483 21.8854 59.6483 20.5201C59.6483 20.0721 59.6909 19.5921 59.7763 19.0801L61.9523 6.69605L67.8083 4.26406L66.8803 9.60805H75.7123L74.9123 14.1201H66.0803L65.4403 17.7361C65.3549 18.1414 65.3123 18.5041 65.3123 18.8241C65.3123 20.1681 65.9523 20.8401 67.2323 20.8401C67.9149 20.8401 68.4803 20.5521 68.9283 19.9761C69.3976 19.4001 69.7176 18.6321 69.8883 17.6721H75.2003C74.3043 22.8561 71.3069 25.4481 66.2083 25.4481Z"
        />
        <path
          d="M91.9308 20.0721C91.9308 20.6267 92.2081 20.9041 92.7628 20.9041C93.3388 20.9041 93.8188 20.7974 94.2028 20.5841L94.0428 24.2001C93.0188 25.0321 91.8668 25.4481 90.5868 25.4481C88.2401 25.4481 86.9388 24.5947 86.6828 22.8881C85.6161 24.5947 84.0481 25.4481 81.9788 25.4481C78.4801 25.4481 76.7308 23.9441 76.7308 20.9361C76.7308 20.4241 76.7841 19.8587 76.8908 19.2401L77.5628 15.4961C77.9041 13.5761 78.6828 12.0507 79.8988 10.9201C81.1361 9.76805 82.7361 9.19205 84.6988 9.19205C86.6828 9.19205 88.0268 9.65072 88.7308 10.5681L88.8908 9.60805H93.7548L91.9628 19.6881C91.9414 19.8161 91.9308 19.9441 91.9308 20.0721ZM82.4588 18.5361C82.4161 18.7281 82.3948 18.9947 82.3948 19.3361C82.3948 19.6774 82.5548 20.0187 82.8748 20.3601C83.1948 20.6801 83.7281 20.8401 84.4748 20.8401C85.2428 20.8401 85.9041 20.5414 86.4588 19.9441L87.4188 14.5681C87.1841 14.0347 86.6294 13.7681 85.7548 13.7681C84.1121 13.7681 83.1521 14.5574 82.8748 16.1361L82.4588 18.5361Z"
        />
        <path
          d="M118.868 20.0721C118.868 20.6267 119.146 20.9041 119.7 20.9041C120.276 20.9041 120.756 20.7974 121.14 20.5841L120.98 24.2001C119.956 25.0321 118.804 25.4481 117.524 25.4481C115.178 25.4481 113.876 24.5947 113.62 22.8881C112.554 24.5947 110.986 25.4481 108.916 25.4481C105.418 25.4481 103.668 23.9441 103.668 20.9361C103.668 20.4241 103.722 19.8587 103.828 19.2401L104.5 15.4961C104.842 13.5761 105.62 12.0507 106.836 10.9201C108.074 9.76805 109.674 9.19205 111.636 9.19205C113.62 9.19205 114.964 9.65072 115.668 10.5681L115.828 9.60805H120.692L118.9 19.6881C118.879 19.8161 118.868 19.9441 118.868 20.0721ZM109.396 18.5361C109.354 18.7281 109.332 18.9947 109.332 19.3361C109.332 19.6774 109.492 20.0187 109.812 20.3601C110.132 20.6801 110.666 20.8401 111.412 20.8401C112.18 20.8401 112.842 20.5414 113.396 19.9441L114.356 14.5681C114.122 14.0347 113.567 13.7681 112.692 13.7681C111.05 13.7681 110.09 14.5574 109.812 16.1361L109.396 18.5361Z"
        />
        <path
          d="M121.35 34.1841C120.774 34.1841 120.241 34.0774 119.75 33.8641C119.238 33.6721 118.876 33.4694 118.662 33.2561L118.342 32.9361L119.462 29.3201C119.718 29.5334 120.124 29.6401 120.678 29.6401C121.425 29.6401 121.873 29.2347 122.022 28.4241L125.35 9.60805H130.79L127.334 29.1601C127.057 30.6961 126.46 31.9121 125.542 32.8081C124.646 33.7254 123.249 34.1841 121.35 34.1841ZM125.926 4.39205C125.926 3.02672 126.225 2.03472 126.822 1.41605C127.441 0.776054 128.39 0.456055 129.67 0.456055C131.462 0.456055 132.358 1.24539 132.358 2.82405C132.358 4.16805 132.049 5.14939 131.43 5.76805C130.812 6.38672 129.862 6.69605 128.582 6.69605C126.812 6.69605 125.926 5.92805 125.926 4.39205Z"
        />
        <path
          d="M147.159 20.0721C147.159 20.6267 147.437 20.9041 147.991 20.9041C148.567 20.9041 149.047 20.7974 149.431 20.5841L149.271 24.2001C148.247 25.0321 147.095 25.4481 145.815 25.4481C143.405 25.4481 142.093 24.5201 141.879 22.6641C140.599 24.5201 138.871 25.4481 136.695 25.4481C134.541 25.4481 133.143 24.9574 132.503 23.9761C132.077 23.3574 131.863 22.6534 131.863 21.8641C131.863 21.0747 131.927 20.3494 132.055 19.6881L133.847 9.60805H139.287L137.783 18.1201C137.719 18.5041 137.687 18.8881 137.687 19.2721C137.687 20.2961 138.263 20.8081 139.415 20.8081C140.375 20.8081 141.143 20.4774 141.719 19.8161L143.543 9.60805H148.983L147.191 19.6881C147.17 19.8161 147.159 19.9441 147.159 20.0721Z"
        />
        <path
          d="M158.271 25.4481C155.796 25.4481 154.015 24.8934 152.927 23.7841C152.116 22.9734 151.711 21.8854 151.711 20.5201C151.711 20.0721 151.753 19.5921 151.839 19.0801L154.015 6.69605L159.871 4.26406L158.943 9.60805H167.775L166.975 14.1201H158.143L157.503 17.7361C157.417 18.1414 157.375 18.5041 157.375 18.8241C157.375 20.1681 158.015 20.8401 159.295 20.8401C159.977 20.8401 160.543 20.5521 160.991 19.9761C161.46 19.4001 161.78 18.6321 161.951 17.6721H167.263C166.367 22.8561 163.369 25.4481 158.271 25.4481Z"
        />
        <path
          d="M178.553 9.16006C180.857 9.16006 182.596 9.66139 183.769 10.6641C184.687 11.4534 185.145 12.5521 185.145 13.9601C185.145 14.4294 185.092 14.9414 184.985 15.4961L184.313 19.2401C183.908 21.5014 182.959 23.1014 181.465 24.0401C179.993 24.9787 178.02 25.4481 175.545 25.4481C173.071 25.4481 171.257 24.9787 170.105 24.0401C169.252 23.3361 168.825 22.2801 168.825 20.8721C168.825 20.3814 168.879 19.8374 168.985 19.2401L169.657 15.4961C170.404 11.2721 173.369 9.16006 178.553 9.16006ZM179.417 16.1361C179.46 15.9227 179.481 15.6561 179.481 15.3361C179.481 14.9947 179.343 14.6214 179.065 14.2161C178.788 13.8107 178.297 13.6081 177.593 13.6081C176.911 13.6081 176.335 13.8427 175.865 14.3121C175.396 14.7601 175.097 15.3681 174.969 16.1361L174.553 18.5361C174.511 18.7494 174.489 19.0267 174.489 19.3681C174.489 19.6881 174.628 20.0401 174.905 20.4241C175.183 20.8081 175.663 21.0001 176.345 21.0001C177.049 21.0001 177.636 20.7654 178.105 20.2961C178.575 19.8054 178.873 19.2187 179.001 18.5361L179.417 16.1361Z"
        />
        <path
          d="M202.568 12.8721C202.568 13.5974 202.44 14.3014 202.184 14.9841C201.949 15.6667 201.714 16.1681 201.48 16.4881L201.128 16.9361H196.296C196.829 16.4454 197.096 15.8374 197.096 15.1121C197.096 14.7281 196.968 14.4187 196.712 14.1841C196.477 13.9281 196.146 13.8001 195.72 13.8001C194.994 13.8001 194.365 14.1627 193.832 14.8881L192.04 25.0001H186.6L189.32 9.60805H194.376L193.992 11.7521C195.208 10.0241 196.68 9.16006 198.408 9.16006C199.794 9.16006 200.829 9.49072 201.512 10.1521C202.216 10.8134 202.568 11.7201 202.568 12.8721Z"
        />
        <path
          d="M202.941 23.1441C202.941 21.7787 203.24 20.7867 203.837 20.1681C204.456 19.5281 205.416 19.2081 206.717 19.2081C208.637 19.2081 209.597 20.1574 209.597 22.0561C209.597 28.3281 206.632 31.4641 200.701 31.4641L201.117 29.1601C202.248 29.1601 203.368 28.6267 204.477 27.5601C205.096 26.9627 205.469 26.2587 205.597 25.4481C203.827 25.4481 202.941 24.6801 202.941 23.1441Z"
        />
        <path
          d="M54.1415 59.9361C54.1415 60.6401 53.9282 61.2907 53.5015 61.8881H48.2535C48.4242 61.7601 48.5095 61.5467 48.5095 61.2481C48.5095 60.9494 48.3388 60.7147 47.9975 60.5441C47.6562 60.3521 47.2188 60.2561 46.6855 60.2561C45.0855 60.2561 44.2855 60.7467 44.2855 61.7281C44.2855 62.1121 44.5842 62.3894 45.1815 62.5601C45.7788 62.7307 46.5042 62.8694 47.3575 62.9761C48.2108 63.0827 49.0642 63.2427 49.9175 63.4561C50.7708 63.6481 51.4962 64.0427 52.0935 64.6401C52.6908 65.2374 52.9895 66.0374 52.9895 67.0401C52.9895 68.8107 52.2748 70.1547 50.8455 71.0721C49.4375 71.9894 47.3788 72.4481 44.6695 72.4481C41.9602 72.4481 40.0615 72.0107 38.9735 71.1361C38.1202 70.4534 37.6935 69.5147 37.6935 68.3201C37.6935 67.9787 37.7255 67.6267 37.7895 67.2641L43.1335 67.2001C43.0908 67.4987 43.2615 67.7654 43.6455 68.0001C44.0508 68.2134 44.6375 68.3201 45.4055 68.3201C46.1735 68.3201 46.7282 68.2454 47.0695 68.0961C47.4108 67.9254 47.5815 67.6161 47.5815 67.1681C47.5815 66.8694 47.2828 66.6667 46.6855 66.5601C46.0882 66.4321 45.3522 66.3254 44.4775 66.2401C43.6242 66.1547 42.7602 66.0161 41.8855 65.8241C41.0322 65.6321 40.3068 65.2267 39.7095 64.6081C39.1122 63.9894 38.8135 63.1787 38.8135 62.1761C38.8135 60.2347 39.5602 58.7414 41.0535 57.6961C42.5682 56.6507 44.7442 56.1281 47.5815 56.1281C51.9548 56.1281 54.1415 57.3974 54.1415 59.9361Z"
        />
        <path
          d="M62.456 67.9041C62.9467 67.9041 63.384 67.7974 63.768 67.5841L63.608 71.2001C62.6053 72.0321 61.464 72.4481 60.184 72.4481C58.2427 72.4481 56.984 72 56.408 71.104C56.024 70.5067 55.832 69.8774 55.832 69.2161C55.832 68.5334 55.8747 67.936 55.96 67.424L57.88 56.6081H63.32L61.528 66.6881C61.5067 66.8161 61.496 66.9334 61.496 67.0401C61.496 67.6161 61.816 67.9041 62.456 67.9041ZM58.52 51.3921C58.52 50.0267 58.8187 49.0347 59.416 48.4161C60.0347 47.7761 60.984 47.4561 62.264 47.4561C64.056 47.4561 64.952 48.2454 64.952 49.8241C64.952 51.1681 64.6427 52.1494 64.024 52.7681C63.4267 53.3867 62.4773 53.6961 61.176 53.6961C59.4053 53.6961 58.52 52.9281 58.52 51.3921Z"
        />
        <path
          d="M92.2313 67.9041C92.7219 67.9041 93.1593 67.7974 93.5433 67.5841L93.3833 71.2001C92.3806 72.0321 91.2393 72.4481 89.9593 72.4481C87.0579 72.4481 85.6073 71.2321 85.6073 68.8001C85.6073 68.3734 85.6499 67.9147 85.7353 67.424L86.4073 63.4881C86.4713 63.1041 86.5033 62.7201 86.5033 62.3361C86.5033 61.3121 85.9379 60.8001 84.8073 60.8001C83.6979 60.8001 82.8233 61.2374 82.1833 62.1121L80.4553 72.0001H75.0153L76.5193 63.4881C76.5833 63.1041 76.6153 62.7201 76.6153 62.3361C76.6153 61.3121 76.0393 60.8001 74.8873 60.8001C73.9699 60.8001 73.1806 61.1521 72.5193 61.8561L70.7273 72.0001H65.2873L68.0073 56.6081H73.0633L72.7113 58.5281C73.9913 56.9494 75.6126 56.16 77.5753 56.16C80.3486 56.16 81.9273 57.0774 82.3113 58.9121C83.5913 57.0774 85.2979 56.16 87.4313 56.16C89.5859 56.16 90.9833 56.6401 91.6233 57.6001C92.0499 58.2614 92.2633 58.9867 92.2633 59.7761C92.2633 60.5654 92.2099 61.2801 92.1033 61.9201L91.3033 66.6881C91.2819 66.8161 91.2713 66.9334 91.2713 67.0401C91.2713 67.6161 91.5913 67.9041 92.2313 67.9041Z"
        />
        <path
          d="M106.527 56.1921C108.703 56.1921 110.207 56.7681 111.039 57.9201C111.636 58.7094 111.935 59.7121 111.935 60.9281C111.935 61.4187 111.881 61.9414 111.775 62.4961L111.135 66.2401C110.772 68.2667 109.993 69.8134 108.799 70.8801C107.604 71.9254 106.111 72.4481 104.319 72.4481C102.527 72.4481 101.279 71.9681 100.575 71.0081L98.8468 80.8961H93.4068L97.6948 56.6081H102.623L102.463 57.4721C103.465 56.6187 104.82 56.1921 106.527 56.1921ZM103.199 67.84C103.796 67.84 104.351 67.6481 104.863 67.2641C105.375 66.8801 105.695 66.3041 105.823 65.5361L106.239 63.1361C106.281 62.9227 106.303 62.6561 106.303 62.3361C106.303 62.0161 106.164 61.6747 105.887 61.312C105.609 60.9494 105.129 60.7681 104.447 60.7681C103.337 60.7681 102.612 61.0347 102.271 61.5681L101.311 66.9441C101.609 67.5414 102.239 67.84 103.199 67.84Z"
        />
        <path
          d="M119.812 67.0721C119.812 67.6267 120.09 67.9041 120.644 67.9041C121.22 67.9041 121.7 67.7974 122.084 67.5841L121.924 71.2001C120.9 72.0321 119.748 72.4481 118.468 72.4481C116.527 72.4481 115.268 72 114.692 71.104C114.33 70.528 114.148 69.8987 114.148 69.2161C114.148 68.5334 114.191 67.936 114.276 67.424L117.764 47.7121H123.204L119.844 66.6881C119.823 66.8161 119.812 66.9441 119.812 67.0721Z"
        />
        <path
          d="M139.503 67.0721C139.503 67.6267 139.78 67.9041 140.335 67.9041C140.911 67.9041 141.391 67.7974 141.775 67.5841L141.615 71.2001C140.591 72.0321 139.439 72.4481 138.159 72.4481C135.748 72.4481 134.436 71.5201 134.223 69.6641C132.943 71.5201 131.215 72.4481 129.039 72.4481C126.884 72.4481 125.487 71.9574 124.847 70.9761C124.42 70.3574 124.207 69.6534 124.207 68.8641C124.207 68.0747 124.271 67.3494 124.399 66.6881L126.191 56.6081H131.631L130.127 65.1201C130.063 65.5041 130.031 65.8881 130.031 66.2721C130.031 67.2961 130.607 67.8081 131.759 67.8081C132.719 67.8081 133.487 67.4774 134.063 66.8161L135.887 56.6081H141.327L139.535 66.6881C139.514 66.8161 139.503 66.9441 139.503 67.0721Z"
        />
        <path
          d="M167.454 59.9361C167.454 60.6401 167.241 61.2907 166.814 61.8881H161.566C161.737 61.7601 161.822 61.5467 161.822 61.2481C161.822 60.9494 161.651 60.7147 161.31 60.5441C160.969 60.3521 160.531 60.2561 159.998 60.2561C158.398 60.2561 157.598 60.7467 157.598 61.7281C157.598 62.1121 157.897 62.3894 158.494 62.5601C159.091 62.7307 159.817 62.8694 160.67 62.9761C161.523 63.0827 162.377 63.2427 163.23 63.4561C164.083 63.6481 164.809 64.0427 165.406 64.6401C166.003 65.2374 166.302 66.0374 166.302 67.0401C166.302 68.8107 165.587 70.1547 164.158 71.0721C162.75 71.9894 160.691 72.4481 157.982 72.4481C155.273 72.4481 153.374 72.0107 152.286 71.1361C151.433 70.4534 151.006 69.5147 151.006 68.3201C151.006 67.9787 151.038 67.6267 151.102 67.2641L156.446 67.2001C156.403 67.4987 156.574 67.7654 156.958 68.0001C157.363 68.2134 157.95 68.3201 158.718 68.3201C159.486 68.3201 160.041 68.2454 160.382 68.0961C160.723 67.9254 160.894 67.6161 160.894 67.1681C160.894 66.8694 160.595 66.6667 159.998 66.5601C159.401 66.4321 158.665 66.3254 157.79 66.2401C156.937 66.1547 156.073 66.0161 155.198 65.8241C154.345 65.6321 153.619 65.2267 153.022 64.6081C152.425 63.9894 152.126 63.1787 152.126 62.1761C152.126 60.2347 152.873 58.7414 154.366 57.6961C155.881 56.6507 158.057 56.1281 160.894 56.1281C165.267 56.1281 167.454 57.3974 167.454 59.9361Z"
        />
        <path
          d="M175.769 67.9041C176.259 67.9041 176.697 67.7974 177.081 67.5841L176.921 71.2001C175.918 72.0321 174.777 72.4481 173.497 72.4481C171.555 72.4481 170.297 72 169.721 71.104C169.337 70.5067 169.145 69.8774 169.145 69.2161C169.145 68.5334 169.187 67.936 169.273 67.424L171.193 56.6081H176.633L174.841 66.6881C174.819 66.8161 174.809 66.9334 174.809 67.0401C174.809 67.6161 175.129 67.9041 175.769 67.9041ZM171.833 51.3921C171.833 50.0267 172.131 49.0347 172.729 48.4161C173.347 47.7761 174.297 47.4561 175.577 47.4561C177.369 47.4561 178.265 48.2454 178.265 49.8241C178.265 51.1681 177.955 52.1494 177.337 52.7681C176.739 53.3867 175.79 53.6961 174.489 53.6961C172.718 53.6961 171.833 52.9281 171.833 51.3921Z"
        />
        <path
          d="M202.159 67.0721C202.159 67.6267 202.437 67.9041 202.991 67.9041C203.567 67.9041 204.047 67.7974 204.431 67.5841L204.271 71.2001C203.247 72.0321 202.095 72.4481 200.815 72.4481C198.405 72.4481 197.093 71.5201 196.879 69.6641C195.599 71.5201 193.871 72.4481 191.695 72.4481C189.541 72.4481 188.143 71.9574 187.503 70.9761C187.077 70.3574 186.863 69.6534 186.863 68.8641C186.863 68.0747 186.927 67.3494 187.055 66.6881L188.847 56.6081H194.287L192.783 65.1201C192.719 65.5041 192.687 65.8881 192.687 66.2721C192.687 67.2961 193.263 67.8081 194.415 67.8081C195.375 67.8081 196.143 67.4774 196.719 66.8161L198.543 56.6081H203.983L202.191 66.6881C202.17 66.8161 202.159 66.9441 202.159 67.0721Z"
        />
        <path
          d="M222.423 59.9361C222.423 60.6401 222.209 61.2907 221.783 61.8881H216.535C216.705 61.7601 216.791 61.5467 216.791 61.2481C216.791 60.9494 216.62 60.7147 216.279 60.5441C215.937 60.3521 215.5 60.2561 214.967 60.2561C213.367 60.2561 212.567 60.7467 212.567 61.7281C212.567 62.1121 212.865 62.3894 213.463 62.5601C214.06 62.7307 214.785 62.8694 215.639 62.9761C216.492 63.0827 217.345 63.2427 218.199 63.4561C219.052 63.6481 219.777 64.0427 220.375 64.6401C220.972 65.2374 221.271 66.0374 221.271 67.0401C221.271 68.8107 220.556 70.1547 219.127 71.0721C217.719 71.9894 215.66 72.4481 212.951 72.4481C210.241 72.4481 208.343 72.0107 207.255 71.1361C206.401 70.4534 205.975 69.5147 205.975 68.3201C205.975 67.9787 206.007 67.6267 206.071 67.2641L211.415 67.2001C211.372 67.4987 211.543 67.7654 211.927 68.0001C212.332 68.2134 212.919 68.3201 213.687 68.3201C214.455 68.3201 215.009 68.2454 215.351 68.0961C215.692 67.9254 215.863 67.6161 215.863 67.1681C215.863 66.8694 215.564 66.6667 214.967 66.5601C214.369 66.4321 213.633 66.3254 212.759 66.2401C211.905 66.1547 211.041 66.0161 210.167 65.8241C209.313 65.6321 208.588 65.2267 207.991 64.6081C207.393 63.9894 207.095 63.1787 207.095 62.1761C207.095 60.2347 207.841 58.7414 209.335 57.6961C210.849 56.6507 213.025 56.1281 215.863 56.1281C220.236 56.1281 222.423 57.3974 222.423 59.9361Z"
        />
        <path
          d="M233.553 56.16C235.857 56.16 237.596 56.6614 238.769 57.6641C239.687 58.4534 240.145 59.5521 240.145 60.9601C240.145 61.4294 240.092 61.9414 239.985 62.4961L239.313 66.2401C238.908 68.5014 237.959 70.1014 236.465 71.0401C234.993 71.9787 233.02 72.4481 230.545 72.4481C228.071 72.4481 226.257 71.9787 225.105 71.0401C224.252 70.3361 223.825 69.2801 223.825 67.8721C223.825 67.3814 223.879 66.8374 223.985 66.2401L224.657 62.4961C225.404 58.2721 228.369 56.16 233.553 56.16ZM234.417 63.1361C234.46 62.9227 234.481 62.6561 234.481 62.3361C234.481 61.9947 234.343 61.6214 234.065 61.2161C233.788 60.8107 233.297 60.6081 232.593 60.6081C231.911 60.6081 231.335 60.8427 230.865 61.312C230.396 61.76 230.097 62.3681 229.969 63.1361L229.553 65.5361C229.511 65.7494 229.489 66.0267 229.489 66.368C229.489 66.688 229.628 67.04 229.905 67.424C230.183 67.808 230.663 68.0001 231.345 68.0001C232.049 68.0001 232.636 67.7654 233.105 67.2961C233.575 66.8054 233.873 66.2187 234.001 65.5361L234.417 63.1361Z"
        />
        <path
          d="M257.568 59.8721C257.568 60.5974 257.44 61.3014 257.184 61.9841C256.949 62.6667 256.714 63.1681 256.48 63.4881L256.128 63.9361H251.296C251.829 63.4454 252.096 62.8374 252.096 62.1121C252.096 61.7281 251.968 61.4187 251.712 61.1841C251.477 60.9281 251.146 60.8001 250.72 60.8001C249.994 60.8001 249.365 61.1627 248.832 61.8881L247.04 72.0001H241.6L244.32 56.6081H249.376L248.992 58.7521C250.208 57.0241 251.68 56.16 253.408 56.16C254.794 56.16 255.829 56.4907 256.512 57.1521C257.216 57.8134 257.568 58.7201 257.568 59.8721Z"
        />
      </svg>
    </div>
  );
};

export default Title;
