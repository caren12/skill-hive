import {
  Code2,
  Palette,
  Languages,
  Music,
  Briefcase,
  ChefHat,
  Camera,
  Dumbbell,
} from "lucide-react";

const categories = [
  { icon: Code2,     label: "Programming", count: 145 },
  { icon: Palette,   label: "Design",       count: 98  },
  { icon: Languages, label: "Languages",    count: 132 },
  { icon: Music,     label: "Music",        count: 76  },
  { icon: Briefcase, label: "Business",     count: 89  },
  { icon: ChefHat,   label: "Cooking",      count: 54  },
  { icon: Camera,    label: "Photography",  count: 67  },
  { icon: Dumbbell,  label: "Fitness",      count: 43  },
];

export default function BrowseByCategory() {
  return (
    <section className="py-16 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Browse by Category
        </h2>
        <p className="text-gray-500 text-base">
          Explore skills across various disciplines
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map(({ icon: Icon, label, count }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-200 rounded-2xl cursor-pointer hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
          >
            <Icon
              size={36}
              strokeWidth={1.5}
              className="text-blue-900 group-hover:text-blue-600 transition-colors duration-200"
            />
            <div className="text-center">
              <p className="font-bold text-gray-900 text-base">{label}</p>
              <p className="text-gray-500 text-sm">{count} skills</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
