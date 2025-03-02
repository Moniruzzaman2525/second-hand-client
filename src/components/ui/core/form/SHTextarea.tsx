
import { Textarea } from '../../textarea';
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TTextareaProps = {
    name: string;
    label?: string;
};

const SHTextarea = ({ name, label }: TTextareaProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="block py-2 text-sm font-normal">{label}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Textarea className='resize-none' {...field} value={field.value || ""} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHTextarea;
