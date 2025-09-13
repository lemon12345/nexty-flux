import { z } from "zod";

export type FunctionMapping = {
  model: string;
  name: string;
  description: string;
  schema: z.ZodObject<any, "strip", z.ZodTypeAny, { [x: string]: any; }, { [x: string]: any; }>;
  default_seed?: number;
  creditsCost: number;
};

export type FunctionMappings = Record<string, FunctionMapping>;

export const featureList: FunctionMappings = {
  'flux_kontext_pro': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Flux Kontext Pro',
    description: 'Flux Kontext Pro is a powerful AI model that can generate realistic images based on a text prompt.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image 2" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'flux_kontext_max': {
    model: 'black-forest-labs/flux-kontext-max',
    name: 'Flux Kontext Max',
    description: 'Flux Kontext Max is a powerful AI model that can generate realistic images based on a text prompt.',
    creditsCost: 20,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image 2" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'multi_image_kontext_pro': {
    model: 'flux-kontext-apps/multi-image-kontext-pro',
    name: 'Multi Image Kontext Pro',
    description: 'Multi Image Kontext Pro is a powerful AI model that can generate realistic images based on a text prompt.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image_1: z.string().url({ message: "Invalid URL for Image 1" }),
      input_image_2: z.string().url({ message: "Invalid URL for Image 2" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'multi_image_kontext_max': {
    model: 'flux-kontext-apps/multi-image-kontext-max',
    name: 'Multi Image Kontext Max',
    description: 'Multi Image Kontext Max is a powerful AI model that can generate realistic images based on a text prompt.',
    creditsCost: 20,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image_1: z.string().url({ message: "Invalid URL for Image 1" }),
      input_image_2: z.string().url({ message: "Invalid URL for Image 2" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_3d_cartoon': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to 3D Cartoon',
    description: 'Transform your photos into awesome 3D cartoons with depth and dimension.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_caricature': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Caricature',
    description: 'Transform your photos into artistic caricatures with exaggerated features.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_cartoon_drawing': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Cartoon Drawing',
    description: 'Transform your photos into artistic cartoon drawings with various styles.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_chinese_painting': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Chinese Painting',
    description: 'Transform your photos into traditional Chinese ink paintings with artistic elegance.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_coloring_page': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Coloring Page',
    description: 'Transform your photos into beautiful coloring pages for creative activities.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_illustration': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Illustration',
    description: 'Transform your photos into beautiful artistic illustrations with various styles.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_line_art': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Line Art',
    description: 'Transform your photos into beautiful line art with clean, artistic lines.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_line_sketch': {
    model: 'bytedance/seededit-3.0',
    name: 'Photo to Line Sketch',
    description: 'Transform your photos into beautiful line sketches with artistic hand-drawn style.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      image: z.string().url({ message: "Invalid URL for Image" }),
      guidance_scale: z.number().min(0.1).max(20).optional().default(5.5),
    })
  },
  'photo_to_oil_painting': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Oil Painting',
    description: 'Transform your photos into beautiful oil paintings with rich textures and artistic style.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_pencil_sketch': {
    model: 'bytedance/seededit-3.0',
    name: 'Photo to Pencil Sketch',
    description: 'Transform your photos into beautiful pencil sketches with artistic hand-drawn style.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      image: z.string().url({ message: "Invalid URL for Image" }),
      guidance_scale: z.number().min(0.1).max(20).optional().default(5.5),
    })
  },
  'photo_to_pop_art': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Pop Art',
    description: 'Transform your photos into vibrant pop art with bold colors and artistic style.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_sculpture': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Sculpture',
    description: 'Transform your photos into stunning 3D sculptures with artistic depth and texture.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_vibrant': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Vibrant',
    description: 'Transform your photos into vibrant, colorful artwork with enhanced brightness and saturation.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_vintage': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Photo to Vintage',
    description: 'Transform your photos into classic vintage artwork with nostalgic, retro aesthetics and timeless appeal.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'photo_to_watercolor': {
    model: 'bytedance/seededit-3.0',
    name: 'Photo to Watercolor',
    description: 'Transform your photos into dreamy watercolor paintings with soft, flowing colors and artistic brushwork.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      image: z.string().url({ message: "Invalid URL for Image" }),
      guidance_scale: z.number().min(0.1).max(20).optional().default(5.5),
    })
  },
  'portrait_art': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Portrait Art',
    description: 'Transform your portrait photos into beautiful artistic masterpieces with various styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'portrait_gift_for_father_day': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Portrait Gift for Father\'s Day',
    description: 'Create personalized portrait gifts for Father\'s Day with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'portrait_gift_for_holiday': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Portrait Gift for Holiday',
    description: 'Create personalized portrait gifts for the holiday season with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'portrait_gift_for_mother_day': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Portrait Gift for Mother\'s Day',
    description: 'Create personalized portrait gifts for Mother\'s Day with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'portrait_gift_for_valentine_day': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Portrait Gift for Valentine\'s Day',
    description: 'Create personalized portrait gifts for Valentine\'s Day with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'scenery_photo_to_art': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Scenery Photo to Art',
    description: 'Transform your outdoor scenery photos into beautiful artwork with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'sports_portrait': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Sports Portrait',
    description: 'Transform your sports photos into beautiful portrait artwork with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  'wedding_portrait': {
    model: 'black-forest-labs/flux-kontext-pro',
    name: 'Wedding Portrait',
    description: 'Transform your wedding photos into beautiful portrait artwork with various artistic styles and effects.',
    creditsCost: 10,
    schema: z.object({
      prompt: z.string().min(1, "Prompt cannot be empty.").max(1000, "Prompt is too long."),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(['match_input_image', "1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('match_input_image'),
      output_format: z.enum(['png', 'jpg']).optional().default('png'),
    })
  },
  // 'restore_image': {
  //   model: 'flux-kontext-apps/restore-image',
  //   name: 'Restore Image',
  //   description: 'Restore Image is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'change_haircut': {
  //   model: 'flux-kontext-apps/change-haircut',
  //   name: 'Change Haircut',
  //   description: 'Change Haircut is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  'flux-kontext-apps/professional-headshot': {
    model: 'flux-kontext-apps/professional-headshot',
    name: 'Professional Headshot',
    description: 'Professional Headshot is a powerful AI model that can generate realistic professional headshot images.',
    creditsCost: 10,
    schema: z.object({
      gender: z.enum(['male', 'female']).optional(),
      input_image: z.string().url({ message: "Invalid URL for Image" }),
      aspect_ratio: z.enum(["1:1", "16:9", "9:16", "4:3", "3:4", "3:2", "2:3", "1:2", "2:1", "4:5", "5:4", "21:9", "9:21"]).optional().default('1:1'),
    })
  },
  // 'portrait_series': {
  //   model: 'flux-kontext-apps/portrait-series',
  //   name: 'Portrait Series',
  //   description: 'Portrait Series is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'multi_image_list': {
  //   model: 'flux-kontext-apps/multi-image-list',
  //   name: 'Multi Image List',
  //   description: 'Multi Image List is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'impossible_scenarios': {
  //   model: 'flux-kontext-apps/impossible-scenarios',
  //   name: 'Impossible Scenarios',
  //   description: 'Impossible Scenarios is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'cartoonify': {
  //   model: 'flux-kontext-apps/cartoonify',
  //   name: 'Cartoonify',
  //   description: 'Cartoonify is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'iconic_locations': {
  //   model: 'flux-kontext-apps/iconic-locations',
  //   name: 'Iconic Locations',
  //   description: 'Iconic Locations is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'renaissance': {
  //   model: 'flux-kontext-apps/renaissance',
  //   name: 'Renaissance',
  //   description: 'Renaissance is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'depth_of_field': {
  //   model: 'flux-kontext-apps/depth-of-field',
  //   name: 'Depth of Field',
  //   description: 'Depth of Field is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'filters': {
  //   model: 'flux-kontext-apps/filters',
  //   name: 'Filters',
  //   description: 'Filters is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'face_to_many_kontext': {
  //   model: 'flux-kontext-apps/face-to-many-kontext',
  //   name: 'Face to Many Kontext',
  //   description: 'Face to Many Kontext is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
  // 'text_removal': {
  //   model: 'flux-kontext-apps/text-removal',
  //   name: 'Text Removal',
  //   description: 'Text Removal is a powerful AI model that can generate realistic images based on a text prompt.',
  // },
}