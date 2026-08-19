import { createClient } from "@supabase/supabase-js";

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const rawKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_KEY ||
  "";

// Sanitize URL and key against accidental wrapping quotes or whitespace from Vercel UI
const supabaseUrl = rawUrl.trim().replace(/^["']|["']$/g, "");
const supabaseAnonKey = rawKey.trim().replace(/^["']|["']$/g, "");

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith("http") &&
    !supabaseUrl.includes("your-project")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface WaitlistEntry {
  full_name: string;
  email: string;
  phone?: string;
  role: "student" | "parent" | "mentor" | "investor";
  class_level?: string;
  city_state?: string;
  children_count?: number;
  children_classes?: string;
  profession?: string;
  weekly_availability?: string;
  entity_type?: "Individual" | "Organization";
  help_category?: string;
  consent: boolean;
  metadata?: Record<string, unknown>;
}

export async function submitWaitlistSignup(data: WaitlistEntry): Promise<{
  success: boolean;
  storage?: "supabase" | "local";
  error?: string;
}> {
  try {
    if (supabase) {
      console.log("🚀 [SchoolOn Waitlist] Sending entry to Supabase cloud...", data.email);
      const { error } = await supabase.from("waitlist_signups").insert([
        {
          full_name: data.full_name,
          email: data.email.toLowerCase().trim(),
          phone: data.phone?.trim() || null,
          role: data.role,
          class_level: data.class_level || null,
          city_state: data.city_state?.trim() || null,
          children_count: data.children_count ? Number(data.children_count) : null,
          children_classes: data.children_classes || null,
          profession: data.profession?.trim() || null,
          weekly_availability: data.weekly_availability || null,
          entity_type: data.entity_type || null,
          help_category: data.help_category || null,
          consent: data.consent,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("❌ [SchoolOn Waitlist] Supabase insert error:", error);
        return {
          success: false,
          error: error.message || "Failed to submit signup to database. Please try again.",
        };
      }

      console.log("✅ [SchoolOn Waitlist] Successfully inserted into Supabase cloud table!");
      return { success: true, storage: "supabase" };
    } else {
      console.warn(
        `⚠️ [SchoolOn Waitlist] Supabase credentials not found or unconfigured (URL found: ${Boolean(supabaseUrl)}, Key found: ${Boolean(supabaseAnonKey)}). Saved to localStorage fallback.`
      );
      if (typeof window !== "undefined") {
        const stored = JSON.parse(localStorage.getItem("schoolon_waitlist_signups") || "[]");
        stored.push({ ...data, created_at: new Date().toISOString() });
        localStorage.setItem("schoolon_waitlist_signups", JSON.stringify(stored));
      }
      await new Promise((resolve) => setTimeout(resolve, 600));
      return { success: true, storage: "local" };
    }
  } catch (err: unknown) {
    console.error("❌ [SchoolOn Waitlist] Unexpected submission error:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "An unexpected error occurred. Please try again.",
    };
  }
}

export async function getWaitlistCount(): Promise<number> {
  const BASE_COUNT = 1482; // Base registered pre-launch community members
  try {
    if (supabase) {
      const { data, error } = await supabase.rpc("get_waitlist_count");

      if (error) {
        console.warn("Supabase count fetch error, falling back to base count:", error.message);
        return BASE_COUNT;
      }
      return BASE_COUNT + (typeof data === "number" ? data : 0);
    }

    if (typeof window !== "undefined") {
      const localSignups = JSON.parse(localStorage.getItem("schoolon_waitlist_signups") || "[]");
      return BASE_COUNT + localSignups.length;
    }

    return BASE_COUNT;
  } catch {
    return BASE_COUNT;
  }
}
