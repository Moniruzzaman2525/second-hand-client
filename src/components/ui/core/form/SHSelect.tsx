
import { FormControl, FormField, FormItem, FormMessage } from '../../form';

type TSelectProps = {
    name: string;
    label?: string;
    options: { value: string; label: string }[];
};

const SHSelect = ({ name, label, options }: TSelectProps) => {
    return (
        <div>
            {label && <label htmlFor={name} className="block py-2 text-sm font-normal">{label}</label>}
            <FormField
                name={name}
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <select
                                {...field}
                                value={field.value || ""}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
