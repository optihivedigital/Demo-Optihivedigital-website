import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  Building2, 
  User, 
  Clock, 
  RefreshCw, 
  ShieldCheck, 
  ExternalLink,
  Search,
  CheckCircle,
  Inbox
} from 'lucide-react';
import { LeadRecord } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface InquiriesViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesViewerModal: React.FC<InquiriesViewerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [leads, setLeads] = useState<LeadRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredLeads = leads.filter(l => 
    l.fullName.toLowerCase().includes(filterQuery.toLowerCase()) ||
    l.companyName.toLowerCase().includes(filterQuery.toLowerCase()) ||
    l.email.toLowerCase().includes(filterQuery.toLowerCase()) ||
    l.id.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 my-8 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Agency Lead Routing & Dispatch Ledger
                </h2>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Target: {AGENCY_INFO.contactEmail}
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Verified records captured by OptiHive Digital form system.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 transition-colors cursor-pointer"
              title="Refresh Inquiries"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-white border-b border-gray-200 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter by company, name, email, or ref ID..."
              className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white"
            />
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {filteredLeads.length} Inquiries
          </span>
        </div>

        {/* Inquiries List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 bg-gray-50/50">
          {isLoading ? (
            <div className="py-12 text-center text-slate-500 text-sm flex flex-col items-center gap-3">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Fetching latest submissions...</span>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No inquiries found matching your query.
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="p-5 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-colors space-y-3 shadow-sm"
              >
                {/* Top Row: Ref ID + Date + Status */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-700 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {lead.id}
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {lead.companyName}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(lead.submittedAt).toLocaleString()}
                    </span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Dispatched
                    </span>
                  </div>
                </div>

                {/* Lead Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold">{lead.fullName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline truncate">
                      {lead.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{lead.phone}</span>
                  </div>
                </div>

                {/* Services & Budget */}
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="text-slate-500 font-medium">Budget: <strong className="text-blue-600">{lead.budget}</strong></span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500 font-medium">Requested:</span>
                  {lead.services?.map((s, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-slate-700 font-medium">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Comments / Message */}
                {lead.comments && (
                  <div className="p-3 rounded-lg bg-gray-50 text-xs text-slate-600 italic border border-gray-200">
                    "{lead.comments}"
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>All entries automatically recorded and targeted to <strong>{AGENCY_INFO.contactEmail}</strong></span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors cursor-pointer shadow-sm"
          >
            Close Ledger
          </button>
        </div>
      </div>
    </div>
  );
};
