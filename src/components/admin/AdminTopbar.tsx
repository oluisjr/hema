import { Bell, LogOut, MessageCircle, Search } from "lucide-react";

export function AdminTopbar() {
  return (
    <div className="street-admin-topbar">
      <div className="admin-breadcrumb">Produtos <span>›</span> Novo Produto</div>
      <div className="admin-search">
        <input placeholder="Buscar no admin..." />
        <Search size={19} />
      </div>
      <Bell size={21} />
      <MessageCircle size={21} />
      <div className="admin-avatar" />
      <div className="admin-user-name"><strong>Administrador</strong><small>admin@hema.com.br</small></div>
      <LogOut size={19} />
    </div>
  );
}
