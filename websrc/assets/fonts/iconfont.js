;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M892.928 128q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 448.512q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0zM892.928 769.024q28.672 0 48.64 19.968t19.968 48.64l0 52.224q0 28.672-19.968 48.64t-48.64 19.968l-759.808 0q-28.672 0-48.64-19.968t-19.968-48.64l0-52.224q0-28.672 19.968-48.64t48.64-19.968l759.808 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youjian" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M500.051 582.805 110.133 436.631v373.991c0 8.888 7.273 16.164 16.211 16.164h747.344c8.939 0 16.18-7.276 16.18-16.164V436.631L500.051 582.805zM873.688 289.513H126.344c-8.938 0-16.211 7.274-16.211 16.163v56.342L500.051 508.19l389.816-146.173v-56.342C889.867 296.787 882.627 289.513 873.688 289.513z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yezi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M717.536 0c-168.768 278.976-302.304 141.792-497.6 342.432-172.352 177.056-112.576 390.304 32.512 463.744 143.232-73.184 289.76-236.832 398.464-473.728 0 0 97.664 299.136-201.504 587.36 145.28 170.144 391.84 51.776 460.736-218.912 74.912-294.272-120.384-593.888-192.608-700.896zM97.024 966.24c0.128 2.912 3.424 57.76 75.36 57.76 52.352 0 317.824-144.672 454.272-520.192-206.432 365.216-506.112 455.84-529.632 462.432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M861.799424 526.855168c0 31.929344-26.124288 58.053632-58.052608 58.053632L220.30848 584.9088c-31.929344 0-58.053632-26.124288-58.053632-58.053632l0-29.011968c0-31.929344 26.124288-58.053632 58.053632-58.053632l583.438336 0c31.929344 0 58.052608 26.124288 58.052608 58.053632L861.799424 526.855168z"  ></path>' +
    '' +
    '<path d="M526.532608 162.574336c31.930368 0 58.053632 26.124288 58.053632 58.053632l0 583.438336c0 31.930368-26.124288 58.053632-58.053632 58.053632l-29.010944 0c-31.929344 0-58.053632-26.124288-58.053632-58.053632L439.468032 220.627968c0-31.929344 26.124288-58.053632 58.053632-58.053632L526.532608 162.574336z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.614912 435.037184l-79.833088-33.216512c-0.224256-0.079872-0.497664-0.192512-0.740352-0.273408-6.144-19.39968-14.139392-38.590464-23.68512-56.96 0.29696-0.612352 0.59392-1.222656 0.827392-1.865728l32.526336-78.81216c5.330944-12.884992 2.397184-27.692032-7.481344-37.536768l-62.442496-62.460928c-9.8304-9.836544-24.629248-12.788736-37.512192-7.48032l-79.69792 32.878592c-0.313344 0.145408-0.674816 0.33792-1.011712 0.498688-18.482176-9.603072-37.634048-17.564672-56.936448-23.694336-0.192512-0.442368-0.369664-0.884736-0.539648-1.318912L587.121664 85.558272c-5.342208-12.852224-17.880064-21.249024-31.816704-21.249024l-88.303616 0c-13.938688 0-26.50112 8.3968-31.857664 21.249024l-33.169408 79.84128c-0.111616 0.233472-0.192512 0.498688-0.304128 0.73216-19.352576 6.12864-38.51776 14.091264-56.911872 23.677952-0.611328-0.305152-1.287168-0.587776-1.898496-0.852992l-78.82752-32.524288c-12.868608-5.308416-27.68384-2.356224-37.552128 7.51104l-62.404608 62.429184c-9.884672 9.843712-12.82048 24.651776-7.488512 37.536768l32.863232 79.712256c0.152576 0.305152 0.362496 0.674816 0.474112 0.980992-9.611264 18.546688-17.572864 37.704704-23.66976 56.951808-0.443392 0.185344-0.909312 0.346112-1.350656 0.523264l-79.198208 32.959488c-12.901376 5.356544-21.249024 17.92-21.249024 31.834112l0 88.301568c0 13.914112 8.372224 26.502144 21.249024 31.834112l79.824896 33.191936c0.208896 0.105472 0.498688 0.178176 0.724992 0.289792 6.144 19.350528 14.106624 38.501376 23.677952 56.927232-0.306176 0.652288-0.587776 1.270784-0.869376 1.946624l-32.47616 78.772224c-5.332992 12.868608-2.39616 27.66848 7.463936 37.521408l62.42816 62.442496c9.868288 9.852928 24.68352 12.82048 37.552128 7.49568l79.688704-32.871424c0.306176-0.129024 0.667648-0.33792 1.01376-0.498688 18.394112 9.572352 37.535744 17.516544 56.958976 23.702528 0.169984 0.474112 0.347136 0.90112 0.514048 1.335296l32.93696 79.22176c5.35552 12.86144 17.918976 21.249024 31.857664 21.249024l88.303616 0c13.93664 0 26.474496-8.387584 31.816704-21.249024l33.201152-79.84128c0.079872-0.226304 0.19968-0.498688 0.305152-0.74752 19.39968-6.15424 38.564864-14.099456 56.96-23.670784 0.618496 0.3072 1.245184 0.586752 1.87392 0.869376l78.779392 32.508928c12.893184 5.308416 27.667456 2.36544 37.54496-7.479296l62.442496-62.444544c9.877504-9.852928 12.812288-24.658944 7.481344-37.543936l-32.864256-79.688704c-0.151552-0.321536-0.345088-0.692224-0.489472-0.9984 9.570304-18.41664 17.54112-37.59104 23.701504-56.97536 0.451584-0.16896 0.90112-0.33792 1.33632-0.531456l79.198208-32.934912c12.900352-5.331968 21.272576-17.92 21.272576-31.834112l0-88.301568C957.86496 452.957184 949.491712 440.377344 936.614912 435.037184zM511.147008 639.485952c-70.95296 0-128.451584-57.505792-128.451584-128.4608 0-70.962176 57.498624-128.459776 128.451584-128.459776 70.953984 0 128.453632 57.4976 128.453632 128.459776C639.601664 581.98016 582.100992 639.485952 511.147008 639.485952z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanbi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M109.312 1005.248l-90.56-90.56 896.064-896 90.496 90.56L109.312 1005.248 109.312 1005.248zM914.816 1005.248l-896.064-896 90.56-90.56 896 896L914.816 1005.248 914.816 1005.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M640.512 256 640.512 128 382.464 128 382.464 256 192 256 192 320 832 320 832 256Z"  ></path>' +
    '' +
    '<path d="M256 896l512 0L768 384 256 384 256 896zM576 512l64 0 0 256-64 0L576 512zM384 512l64 0 0 256-64 0L384 512z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontlock" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M813.727 406.147l-87.369 0L726.358 299.102c0 0 19.184-213.94-214.357-213.94 0 0-211.855 0-211.855 215.191l0 105.794-89.872 0c-24.275 0-44.136 19.861-44.136 44.136l0 444.417c0 24.275 19.861 44.138 44.136 44.138l603.453 0c24.275 0 44.136-19.863 44.136-44.138L857.863 450.283C857.863 426.009 838.001 406.147 813.727 406.147zM379.382 406.147 379.382 300.353c0 0-1.668-135.12 136.788-135.12 0 0 130.533-4.17 130.533 133.452l0 107.462L379.382 406.147z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yidong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.661208 361.227636 55.515511 361.227636c-16.818424 0-13.773576-17.080889-9.404768-20.521374L402.111067 47.489293c4.368808-3.444364 10.984727-4.499394 16.747313-2.580687 5.757414 1.854061 9.465535 6.222869 9.465535 11.121778l-103.434343 233.49398 613.641051 0c4.035232 0 7.277899 3.247838 7.277899 7.283071l0 57.201778C945.873168 357.98497 942.631794 361.227636 938.661208 361.227636L938.661208 361.227636zM968.514945 665.292283 85.369248 665.292283c-4.040404 0-7.283071 3.242667-7.283071 7.277899l0 57.206949c0 4.035232 3.242667 7.277899 7.283071 7.277899l613.635879 0-103.434343 233.500444c0 4.898909 3.777939 9.267717 9.469414 11.120485 5.757414 1.854061 12.378505 0.858505 16.747313-2.580687l355.995152-293.21697C982.283349 682.433939 985.328198 665.292283 968.514945 665.292283L968.514945 665.292283zM968.514945 665.292283"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jinlingyingcaiwangtubiao96" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M541.9008 122.9824c-6.7072-3.1232-14.72-2.0992-20.48 2.688l-249.1904 209.7152L73.9328 335.3856c-10.5984 0-19.2 8.6016-19.2 19.2l0 329.0624c0 10.5984 8.6016 19.2 19.2 19.2l198.2976 0 249.1904 209.7152c3.5584 2.944 7.936 4.5056 12.3648 4.5056 2.7392 0 5.5296-0.5888 8.0896-1.792 6.784-3.1488 11.1104-9.9328 11.1104-17.408L552.9856 140.3904C553.0112 132.9152 548.6848 126.1312 541.9008 122.9824z"  ></path>' +
    '' +
    '<path d="M677.5296 743.808c-5.2736 0-10.5472-2.176-14.336-6.4256-7.0656-7.936-6.3744-20.0448 1.5616-27.1104 54.4768-48.5376 85.7088-118.1952 85.7088-191.1296 0-75.648-33.2032-146.9952-91.0848-195.7888-8.0896-6.8352-9.1392-18.944-2.304-27.0592 6.8352-8.1152 18.944-9.1392 27.0592-2.304 66.56 56.0896 104.7296 138.1632 104.7296 225.152 0 83.84-35.9168 163.968-98.56 219.776C686.6688 742.2208 682.0864 743.808 677.5296 743.808z"  ></path>' +
    '' +
    '<path d="M783.3344 834.1504c-6.5536 0-12.928-3.3536-16.5376-9.3696-5.4272-9.1136-2.432-20.8896 6.6816-26.3168 98.048-58.3424 158.976-165.376 158.976-279.296 0-114.5856-61.3888-221.9008-160.2816-280.064-9.1136-5.376-12.1856-17.152-6.8096-26.2912 5.3504-9.1136 17.0752-12.2112 26.2912-6.8096 110.5152 65.0496 179.1744 185.0624 179.1744 313.1648 0 127.4112-68.096 247.0656-177.7152 312.2944C790.0672 833.28 786.6624 834.1504 783.3344 834.1504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-location" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998977 959.752744c0 0-335.814302-374.240473-335.814302-559.692209 0-185.447642 150.362566-335.814302 335.814302-335.814302 185.455829 0 335.816349 150.367683 335.816349 335.814302C847.815325 585.512271 511.998977 959.752744 511.998977 959.752744zM511.998977 273.257547c-70.02689 0-126.805034 56.779168-126.805034 126.805034 0 70.02996 56.778144 126.807081 126.805034 126.807081 70.028936 0 126.806057-56.777121 126.806057-126.807081C638.805034 330.036715 582.027913 273.257547 511.998977 273.257547z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M744.40287 660.319338c-28.315881-12.407577-106.76349-33.440594-116.183015-69.130414-14.805181-56.392309 41.416236-99.388529 66.403305-143.782583 26.315319-46.825428 48.268288-110.194633 52.551844-163.167056 15.385395-190.107615-101.173173-301.336809-268.259488-282.088436C357.425639 16.128177 284.852826 106.721397 277.013284 223.381272c-7.965409 118.852819 36.121654 206.651392 82.969595 271.032645 20.486572 28.167502 41.99645 46.280006 38.72392 80.186204-3.874234 40.098219-46.74561 51.302389-77.424303 63.618891-36.382597 14.611777-75.515839 36.780663-94.025385 47.030089-63.698709 35.212959-133.635488 77.561426-149.350387 135.521439C43.090806 949.225034 160.648121 988.131102 257.662581 1006.083971c83.299099 15.361859 177.165872 16.555033 254.431563 16.555033 139.680152 0 390.919003-5.590317 431.426544-110.603955 11.521395-29.803767 6.567574-77.29946 0-96.809799C918.102807 739.483261 816.679947 692.077619 744.40287 660.319338z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M722.5344 879.2064 267.195733 500.053333 722.5344 120.832Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M932.704 267.385c-20.313-33.609-45.375-66.489-76.041-96.976-31.007-30.798-64.467-56.038-98.686-76.304l60.107-60.13c0 0 87.010-0.025 130.507 43.491 43.503 43.514 43.503 130.525 43.503 130.525l-59.389 59.394zM396.956 810.873h-181.756v-181.755l21.826-21.82c36.953 17.393 73.648 42.001 106.689 75.047 33.058 33.023 57.643 69.76 75.059 106.707l-21.819 21.82zM882.478 317.633l-411.241 418.97c-21.216-35.123-47.395-69.443-79.426-101.294-32.383-32.186-67.331-58.515-103.076-79.707l419.734-411.983c35.386 16.634 70.508 40.158 102.148 71.818 31.654 31.66 55.185 66.758 71.86 102.197zM154.688 153.626v717.737h717.76v-299.060l119.628-119.615 0.017 451.303c0 48.066-38.95 87.010-87.005 87.010h-783.040c-48.048 0-87.005-38.945-87.005-87.010v-783.010c0-48.091 38.956-87.028 87.005-87.028l451.333 0.025-119.628 119.65h-299.066z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-left" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M774.656 489.57l-479.122-479.157c-13.943-13.907-36.48-13.907-50.422 0-13.943 13.943-13.943 36.515 0 50.458l455.73 455.765-448.205 448.241c-13.551 13.516-13.551 35.446 0 48.961 13.515 13.586 35.446 13.586 48.995 0l465.5-465.464c1.819-1.819 2.71-4.030 4.030-6.133 1.105-0.82 2.461-1.248 3.495-2.282 13.907-13.907 13.907-36.48 0-50.387z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M301.466 144.794l455.339 379.153-455.339 379.221z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yanjing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.616 511.872c0 98.048-210.944 307.136-511.616 307.136-292.992 0.064-511.616-205.632-511.616-307.136 0-101.44 219.584-306.816 511.616-306.816C814.976 205.056 1023.68 410.432 1023.616 511.872L1023.616 511.872zM512.448 261.12C376.256 261.12 265.92 373.44 265.92 512s110.4 250.944 246.528 250.944c136.192 0 246.592-112.384 246.592-250.944C759.04 373.44 648.64 261.12 512.448 261.12L512.448 261.12zM512 351.872c-86.72 0-156.992 71.552-156.992 159.808S425.28 671.424 512 671.424s156.992-71.552 156.992-159.808C668.992 423.36 598.72 351.872 512 351.872L512 351.872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M-4.0e-06 0l0 1024 1024 0L1023.999996 0-4.0e-06 0zM983.067748 983.067752 40.932244 983.067752 40.932244 40.932248l942.135504 0L983.067748 983.067752zM287.83147 532.466124l203.702402 0 0 203.702402c0 11.30344 9.162684 20.466124 20.466124 20.466124s20.466124-9.162684 20.466124-20.466124L532.46612 532.466124l203.702402 0c11.30344 0 20.466124-9.162684 20.466124-20.466124s-9.162684-20.466124-20.466124-20.466124L532.46612 491.533876 532.46612 287.831474c0-11.30344-9.162684-20.466124-20.466124-20.466124s-20.466124 9.162684-20.466124 20.466124l0 203.702402L287.83147 491.533876c-11.30344 0-20.466124 9.162684-20.466124 20.466124S276.52803 532.466124 287.83147 532.466124z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M840.221764 125.476662l-657.326684 0c-65.963435 0-119.486963 53.579813-119.486963 119.605672l0 391.408836c0 65.90408 53.522505 119.425562 119.486963 119.425562l336.449541 0c0 0 139.181436 113.29464 158.063364 128.052447 18.882952 14.691288 26.511042 11.375617 26.26032 0-0.188297-11.383804-0.127919-128.052447-0.127919-128.052447l136.681379 0c66.091354 0 119.548365-53.521481 119.548365-119.425562L959.770129 245.082334C959.771152 179.056474 906.313119 125.476662 840.221764 125.476662zM319.513011 509.626839c-35.327248 0-64.024177-28.57208-64.024177-64.0252 0-35.449027 28.696929-64.024177 64.024177-64.024177 35.327248 0 64.026223 28.57515 64.026223 64.024177C383.539234 481.05476 354.841282 509.626839 319.513011 509.626839zM511.590658 509.626839c-35.327248 0-64.0252-28.57208-64.0252-64.0252 0-35.449027 28.697952-64.024177 64.0252-64.024177 35.327248 0 64.026223 28.57515 64.026223 64.024177C575.616881 481.05476 546.917906 509.626839 511.590658 509.626839zM703.668305 509.626839c-35.324178 0-64.024177-28.57208-64.024177-64.0252 0-35.449027 28.699999-64.024177 64.024177-64.024177 35.326224 0 64.026223 28.57515 64.026223 64.024177C767.694528 481.05476 738.993506 509.626839 703.668305 509.626839z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M144.794 722.534l379.153-455.339 379.221 455.339z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengque" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M514.048 59.392q93.184 0 174.592 35.328t142.336 96.768 96.256 143.36 35.328 175.104-35.328 175.616-96.256 143.872-142.336 96.768-174.592 35.328-175.104-35.328-142.848-96.768-96.256-143.872-35.328-175.616 35.328-175.104 96.256-143.36 142.848-96.768 175.104-35.328zM795.648 423.936q18.432-18.432 19.456-45.568t-17.408-45.568-45.056-17.92-45.056 18.944l-288.768 288.768-99.328-98.304q-18.432-18.432-45.056-18.944t-45.056 17.92-18.944 43.52 17.92 43.52l142.336 143.36q18.432 18.432 48.128 17.92t48.128-18.944l-4.096 4.096z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zuzhi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M973.3 640.2 819.7 640.2 819.7 486.6l-256 0L563.7 384.2l153.6 0c28.3 0 51.2-22.9 51.2-51.2L768.5 77c0-28.3-22.9-51.2-51.2-51.2L307.7 25.8c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l153.6 0 0 102.4-256 0 0 153.6L51.7 640.2c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l358.4 0c28.3 0 51.2-22.9 51.2-51.2l0-256c0-28.3-22.9-51.2-51.2-51.2L256.5 640.2 256.5 537.8l512 0 0 102.4L614.9 640.2c-28.3 0-51.2 22.9-51.2 51.2l0 256c0 28.3 22.9 51.2 51.2 51.2l358.4 0c28.3 0 51.2-22.9 51.2-51.2l0-256C1024.5 663.1 1001.6 640.2 973.3 640.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhengque1" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M347.669304 882.775558c-16.366759 0-32.732495-6.244214-45.237297-18.727527L18.783809 580.824505c-25.022906-24.980951-25.049512-65.516156-0.056282-90.539063 24.966625-25.015743 65.521273-25.049512 90.529853-0.063445l238.411925 238.059907 567.407937-566.578036c25.00858-25.001417 65.549925-24.965601 90.529853 0.056282 24.994254 25.021883 24.966625 65.563228-0.055259 90.543156L392.906601 864.048031C380.4018 876.532367 364.036064 882.775558 347.669304 882.775558z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shizhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.984 63.6c-247.648 0-448.384 200.704-448.384 448.384 0 247.632 200.752 448.416 448.384 448.416s448.416-200.8 448.416-448.416C960.4 264.304 759.632 63.6 511.984 63.6zM636.192 700.128l-169.984-142.816 0.944-1.136L467.152 198.064l89.696 0 0 318.864 136.752 114.992L636.192 700.128z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianshao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.5488 1024 70.4512 1024C31.60576 1024 0 992.39424 0 953.5488L0 70.4512C0 31.60576 31.60576 0 70.4512 0l883.0976 0C992.39424 0 1024 31.60576 1024 70.4512l0 883.0976C1024 992.39424 992.39424 1024 953.5488 1024zM70.4512 20.48C42.89536 20.48 20.48 42.89536 20.48 70.4512l0 883.0976c0 27.55584 22.41536 49.9712 49.9712 49.9712l883.0976 0c27.55584 0 49.9712-22.41536 49.9712-49.9712L1003.52 70.4512c0-27.55072-22.41536-49.9712-49.9712-49.9712L70.4512 20.48z"  ></path>' +
    '' +
    '<path d="M294.4 501.76l435.2 0 0 20.48-435.2 0 0-20.48Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M865.30107 364.243795c-19.371186-47.76077-47.813982-90.598414-84.540442-127.32692-36.730553-36.730553-79.56922-65.173348-127.328967-84.540442-46.111201-18.699897-94.825692-28.181853-144.79578-28.181853-49.954739 0-98.665137 9.480932-144.776338 28.179806-47.755654 19.36607-90.587158 47.801702-127.303384 84.518952-36.727483 36.726459-65.171302 79.565127-84.539418 127.324874-18.700921 46.113247-28.183899 94.828762-28.183899 144.792711 0 49.963948 9.481955 98.680487 28.182876 144.793734 19.368116 47.7577 47.810912 90.596368 84.537372 127.322827 36.732599 36.732599 79.571267 65.176418 127.327944 84.544535 46.108131 18.699897 94.825692 28.181853 144.794757 28.181853 49.958832 0 98.67537-9.484002 144.792711-28.187993 47.76384-19.370163 90.601484-47.812959 127.322827-84.534302 36.724413-36.722366 65.161069-79.55387 84.526115-127.311571 18.697851-46.110177 28.176736-94.822622 28.17469-144.786571C893.488039 459.071534 884.003014 410.356019 865.30107 364.243795zM700.98777 707.612143c-6.525624 6.525624-15.07944 9.788947-23.63735 9.788947-8.55177 0-17.108656-3.263323-23.636327-9.788947l-146.444327-146.44535L362.663298 705.775308c-6.526647 6.525624-15.081487 9.788947-23.635303 9.788947s-17.10968-3.263323-23.636327-9.788947c-13.054317-13.05534-13.054317-34.219359 0-47.272653l144.606469-144.608515L317.8343 371.730303c-13.053294-13.053294-13.053294-34.217313 0-47.272653 13.053294-13.053294 34.217313-13.053294 47.272653 0l142.163837 142.163837 143.996578-143.996578c13.05534-13.053294 34.217313-13.053294 47.272653 0 13.053294 13.05534 13.053294 34.218336 0 47.27163L554.543444 513.89414l146.444327 146.44535C714.043111 673.393807 714.043111 694.557826 700.98777 707.612143z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M856.256 293.291l-355.456 426.88-355.52-426.88z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)