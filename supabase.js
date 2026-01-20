<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
const SUPABASE_URL = "https://vquvwrrzdbvxjxnkqyih.supabase.co ";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxdXZ3cnJ6ZGJ2eGp4bmtxeWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MTU2OTksImV4cCI6MjA4MzE5MTY5OX0.OTCt3Tg-41Mc60i6t9Cydchk4c7ee7yxtlRDSlo3VBM";

const supabase = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ================= AUTH HELPERS =================
async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user || null;
}

async function requireAuth() {
  const user = await getUser();
  if (!user) {
    alert("Please login first");
    window.location.href = "index.html";
    throw new Error("Not logged in");
  }
  return user;
}

async function logout() {
  await supabase.auth.signOut();
  localStorage.clear();
  window.location.href = "index.html";
}
</script>
