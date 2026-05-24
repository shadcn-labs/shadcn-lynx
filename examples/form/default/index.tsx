import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
  FormSubmitButton,
} from '@shadcn-lynx/ui/form';
import { Input } from '@shadcn-lynx/ui/input';

export default (
  <view style={{ padding: 24 }}>
    <FormRoot
      initialValues={{ email: '' }}
      onSubmit={(values) => console.info('Submit', values)}
    >
      <FormField name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Enter email" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormSubmitButton>
        <view
          style={{
            marginTop: 12,
            padding: 12,
            backgroundColor: '#111827',
            borderRadius: 8,
          }}
        >
          <text style={{ color: '#fff' }}>Submit</text>
        </view>
      </FormSubmitButton>
    </FormRoot>
  </view>
);
