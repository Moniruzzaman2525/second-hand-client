
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TSelectProps = {
    name: string;
    label?: string;
    required?: boolean;
    options: { value: string; label: string }[];
};

const SHSelect = ({ name, label, options, required }: TSelectProps) => {
    return (
        <div className='w-full'>
            {label && <label htmlFor={name} className="block py-2 text-[#374b5c] text-[16px] font-bold">{label} {(label && required) && <span className='text-red-500'>*</span>}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <select
                                {...field}
                                required={required}
                                value={field.value || ""}
                                className="block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="" disabled>Select an option</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
};

export default SHSelect;
