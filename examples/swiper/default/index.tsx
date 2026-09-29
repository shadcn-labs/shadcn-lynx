import { root } from '@lynx-js/react';
import { Swiper, SwiperItem } from '@shadcn-lynx/ui/swiper';

const cards = [
  { title: 'Build', description: 'Copy the source into your app.' },
  { title: 'Own', description: 'Adapt every detail to your product.' },
  { title: 'Ship', description: 'Render across native and web hosts.' },
];

const example = (
  <view className="p-6">
    <Swiper
      data={cards}
      itemWidth={280}
      itemHeight={180}
      containerWidth={328}
      mode="normal"
      modeConfig={{ align: 'center', spaceBetween: 12 }}
    >
      {({ item }) => (
        <SwiperItem className="flex h-full justify-center p-6">
          <text className="text-xl font-semibold">{item.title}</text>
          <text className="mt-2 text-sm text-muted-foreground">
            {item.description}
          </text>
        </SwiperItem>
      )}
    </Swiper>
  </view>
);

root.render(example);

export default example;
